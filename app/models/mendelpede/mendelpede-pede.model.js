const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Database schema for pedes
 * @module mendelpede/pede.model.js
 * @name MendelPede Pede Model
 * @type Model
 */

 const MendelPedeSchema = new Schema({
   bugID: {
     type: Number,
     required: true
   },
   owner: {
     type: Schema.ObjectId,
     ref: 'User'
   },
   scenario: {
     type: Schema.ObjectId,
     ref: 'MendelPedeScenario'
   },
   // encoded with ternary for each trait that's part of scenario
   genotype: [Number],
   // ordered dotcolor, eyeColor, segColor, numLegs, numSegs
   phenotype: [string];
 });

 MendelPedeSchema.set('toJSON',{getters: true});

 mongoose.model('MendelPede', MendelPedeSchema);
