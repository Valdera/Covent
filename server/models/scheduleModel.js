const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  available: {
    type: Number,
    required: [true, "Please enter your name"],
  },

});

const Patient = mongoose.model("Patient", patientSchema);

module.exports = Patient;