// Load the module dependencies
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
const Course = mongoose.model('Course');
const User = mongoose.model('User');
const scenData = require('../../config/scenario.data');

// Create a new error handling controller method
const getErrorMessage = function (err) {
  if (err.errors) {
    for (const errName in err.errors) {
      if (err.errors[errName].message) return err.errors[errName].message;
    }
  } else {
    return 'Unknown server error';
  }
};

/**
 * get list of courses taught by this teacher
 */
exports.listCourses = function (req, res) {
  let teacher = req.user;
  let teacherId = new ObjectId(teacher._id);
  Course.find({
    instructors: teacherId
  }, (err, courses) => {
    if (err) {
      return res.status(500)
        .send({
          message: err
        })
    } else {
      res.json(courses);
    }
  });
}

/**
 *  Create a new course
 */
exports.createCourse = function (req, res) {
  // Create a new course object
  const course = new Course(req.body);

  // Set the course's 'instructor' property
  course.instructors = [req.user];

  // Try saving the course
  course.save((err) => {
    if (err) {
      // If an error occurs send the error message
      return res.status(400)
        .send({
          message: getErrorMessage(err)
        });
    } else {
      // Send a JSON representation of the article
      res.json(course);
    }
  });
};

// Create a new controller method that returns an existing course
exports.getCourse = function (req, res) {
  res.json(req.course);
};

/**
 * Update the description of an existing course
 */
exports.editCourse = function (req, res) {
  const course = req.course;

  // Update the fields
  course.description = req.body.description;

  // Try saving the updated article
  course.save((err) => {
    if (err) {
      // If an error occurs send the error message
      return res.status(400)
        .send({
          message: getErrorMessage(err)
        });
    } else {
      res.json(course);
    }
  });
};

/**
 * Create a new controller method that delete a course
 */
exports.deleteCourse = function (req, res) {
  // Get the article from the 'request' object
  const course = req.course;

  // Use the model 'remove' method to delete the article
  course.remove((err) => {
    if (err) {
      // If an error occurs send the error message
      return res.status(400)
        .send({
          message: getErrorMessage(err)
        });
    } else {
      // Send a JSON representation of the article
      res.json(course);
    }
  });
};

exports.addInstructor = function (req, res) {
  let newInstructor = req.student;
  let course = req.course;
  newInstructor.instructor = true;
  newInstructor.save((err, i) => {
    if (err) {
      return res.status(400)
        .send({
          message: getErrorMessage(err)
        });
    } else {
      course.instructors.push(i);
      course.save((err2, c) => {
        if (err2) {
          return res.status(400)
            .send({
              message: getErrorMessage(err)
            });
        } else {
          res.json(c);
        }
      });
    }
  });
}


/**
 * get list of students for a course
 */
exports.getStudents = function (req, res) {
  const course = req.course;
  let courseId = new ObjectId(course._id);

  User.find({
    course: courseId
  }, (err, users) => {
    if (err) {
      return res.status(500)
        .send({
          message: getErrorMessage(err)
        });
    } else if (!users) {
      return res.status(404)
        .send({
          message: 'no users found'
        });
    } else {
      //req.students = users;
      //next();
      res.json(users);
    }
  });
};

/**
 * Get scenario status (aka access granted) for a scenario for all
 * users in a course
 */
exports.getScenarioStatus = function (req, res) {
  const course = req.course;
  let scenario = req.scenario;

  let courseId = new ObjectId(course._id);
  let scenId = scenario.scenCode;
  User.find({
    course: courseId
  }, (err, students) => {
    if (err) {
      return res.status(500)
        .send({
          message: getErrorMessage(err)
        });
    } else if (!students) {
      return res.status(404)
        .send({
          message: 'no students found'
        });
    } else {
      var output = students.map((student) => {
        return {
          name: student.name,
          id: student.userId,
          status: student.accessGranted[scenId]
        }
      });
      res.json(output);
    }
  });
};

/**
 * Get status of all scenarios for a single user
 */
exports.getStudentStatus = function (req, res) {
  //console.log(req.student);
  //console.log(req.user);
  let student = req.student;
  var outStatus = scenData.map((scenario) => {
    return {
      label: scenario.label,
      status: student.accessGranted[scenario.scenCode]
    }
  });
  res.json(outStatus);
};


// Create a new controller middleware that retrieves a single existing article
exports.courseByNum = function (req, res, next, id) {
  // Use the model 'findById' method to find a single article
  Course.findOne({
    courseNum: id
  }, (err, course) => {
    if (err) return next(err);
    if (!course) return next(new Error('Failed to load course ' + id));

    // If an course is found use the 'request' object to pass it to the next middleware
    req.course = course;
    //console.log('course', course);
    // Call the next middleware
    next();
  })
};

/**
 * ensure that user accessing course is an instuctor or admin
 */
exports.hasAuthorization = function (req, res, next) {
  let instr = req.user;
  // must be instructor or admin
  if (!(instr.instructor || instr.admin)) {
    return res.status(403)
      .send({
        message: 'Not authorized'
      });
  }
  next();
}


/**
 * ensure that user accessing course is one of the instructors
 */
exports.isInstructor = function (req, res, next) {
  let instr = req.user;
  let course = req.course;
  // search for this user in list of instructors

  if (course.instructors.indexOf(instr._id) === -1) {
    return res.status(403)
      .send({
        message: 'Not instructor of this course'
      });
  }
  next();
};
