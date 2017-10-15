// Load the module dependencies
const mongoose = require('mongoose');
const Course = mongoose.model('Course');

// Create a new error handling controller method
const getErrorMessage = function(err) {
    if (err.errors) {
        for (const errName in err.errors) {
            if (err.errors[errName].message) return err.errors[errName].message;
        }
    } else {
        return 'Unknown server error';
    }
};

// Create a new controller method that creates new articles
exports.create = function(req, res) {
    // Create a new course object
    const course = new Course(req.body);

    // Set the course's 'instructor' property
    course.instructor = req.user;

    // Try saving the course
    course.save((err) => {
        if (err) {
            // If an error occurs send the error message
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            // Send a JSON representation of the article
            res.json(course);
        }
    });
};

// Create a new controller method that retrieves a list of articles
/*exports.list = function(req, res) {
    // Use the model 'find' method to get a list of articles
    Article.find().sort('-created').populate('creator', 'firstName lastName fullName').exec((err, articles) => {
        if (err) {
            // If an error occurs send the error message
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            // Send a JSON representation of the article
            res.json(articles);
        }
    });
};*/

// Create a new controller method that returns an existing course
exports.read = function(req, res) {
    res.json(req.course);
};

// Create a new controller method that updates an existing article
/*exports.update = function(req, res) {
    // Get the article from the 'request' object
    const article = req.article;

    // Update the article fields
    article.title = req.body.title;
    article.content = req.body.content;

    // Try saving the updated article
    article.save((err) => {
        if (err) {
            // If an error occurs send the error message
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            // Send a JSON representation of the article
            res.json(article);
        }
    });
};*/

exports.addStudent = function(req, res, next){

};

// Create a new controller method that delete an existing article
exports.delete = function(req, res) {
    // Get the article from the 'request' object
    const course = req.course;

    // Use the model 'remove' method to delete the article
    course.remove((err) => {
        if (err) {
            // If an error occurs send the error message
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            // Send a JSON representation of the article
            res.json(course);
        }
    });
};

// Create a new controller middleware that retrieves a single existing article
exports.courseByNum = function(req, res, next, id) {
    // Use the model 'findById' method to find a single article
    Course.findOne({courseNum: id}).populate('students', 'name email').populate('scenarios').populate('instructor', 'name').exec((err, course) => {
        if (err) return next(err);
        if (!course) return next(new Error('Failed to load course ' + id));

        // If an course is found use the 'request' object to pass it to the next middleware
        req.course = course;

        // Call the next middleware
        next();
    });
};

// Create a new controller middleware that is used to authorize a course operation
exports.hasAuthorization = function(req, res, next) {
    // If the current user does not have admin access, send error message
    if (! req.user.admin) {
        return res.status(403).send({
            message: 'User is not authorized'
        });
    }
    // Call the next middleware
    next();
};
