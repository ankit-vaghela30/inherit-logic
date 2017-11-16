// Load the module dependencies
const mongoose = require('mongoose');
const Fridge = mongoose.model('Fridge');
const Phage = mongoose.model('Phage');
const phageScen = require('../utility/phage.scenario');
const phageEnum = require('../utility/phage.enum');

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


const stockFridge = function (scenario, user) {
  // get stock phage and details
  var stock = phageScen.generateScenario(scenario);
  //console.log(stock.strainList);
  let strainList = stock.strainList;
  var strainIdList = [];
  // loop through strains and save strains to database
  for (let i = 0; i < strainList.length; i++) {
    let strain = strainList[i];
    strain.owner = user;
    strain.scenarioOrigin = scenario;
    let newPhage = new Phage(strain);
    newPhage.save((err, phage) => {
    if (err)
      console.log(err)
    });
    strainIdList.push(newPhage);
  } // end for i
/*Phage.create(strainList, function (err, strains) {
      if (!err) {
        strainIdList = strains.map((strain) => {
          return strain._id;
        });
      } else {
        console.log(err);
      }
    });*/
  // fridge info
  return {
    scenario: scenario,
    owner: user,
    strains: strainIdList,
    scenarioDetails: JSON.stringify(stock.scenData)
  };
}

exports.getFridge = function (req, res) {
  var user = req.user;
  var scen = req.scenario;

  Fridge.findOne({
      owner: user._id,
      scenario: scen._id
    })
    .populate('owner', 'userId')
    .populate('scenario', 'scenCode')
  .populate('strains')
    .exec((err, fridge) => {
      if (err) {
        return res.status(400)
          .send({
            message: getErrorMessage(err)
          });
      } else if (!fridge) {
        // create a fridge
        const fridgeDetails = stockFridge(scen, user);
        //console.log(fridgeDetails);
        const newFridge = new Fridge(fridgeDetails);
        newFridge.save((err, f) => {
          if (err) {
            return res.status(400)
              .send({
                message: getErrorMessage(err)
              });
          } else {
            res.json(f);
          }
        });
      } else {
        res.json(fridge);
      }
    });
};

exports.saveFridge = function (req, res) {
  // get fridge
  console.log(req.body);
  const fridge = req.body;
  let strains = fridge.strains;
  let fridgeId = fridge.id;
  Fridge.findOneAndUpdate(fridgeId, {
    strains: strains
  }, (err) => {
    if (err) {
      return res.status(400)
        .send({
          message: getErrorMessage(err)
        });
    } else {
      // send back fridge
      res.json(fridge);
    }
  });
};

exports.createPhage = function(req, res){
  // phageDetails will have strainNum, mutationList, deletion, comment, parents
  // add phageType - USER

  var phage = req.body;
  console.log('phage',phage);
  // req will include scenario and user info
  var user = req.user;
  var scen = req.scenario;
  phage.owner = user;
  phage.scenarioOrigin = scen;
  phage.phageType = phageEnum.PHAGETYPE.USER;

  Phage.create(phage, (err, newPhage)=>{
    if(err)
      return res.status(400).send({message: getErrorMessage(err)});
    else
      res.json(newPhage)
  });
};

// authorization
exports.hasFridgeAuthorization = function (req, res, next) {
  // current user must be owner of fridge
  if (req.fridge.owner.id !== req.user.id) {
    return res.status(403)
      .send({
        message: 'User is not authorized'
      });
  }
  // call next middleware
  next();
}
