const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your name"],
  },
  age: {
    type: Number,
    required: [true, "Please enter your age"],
  },
  gender: {
    type: Number,
    required: [true, "Please enter your gender"],
    enum: {
      values: [0, 1],
      message: "{VALUE} is not supported",
    },
  },
  diagnoseHistory: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Diagnose",
    },
  ],
});

const Patient = mongoose.model("Patient", patientSchema);

module.exports = Patient;
