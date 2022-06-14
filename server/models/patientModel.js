const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your name"],
  },
  age: {
    type: Integer,
    required: [true, "Please enter your age"],
  },
  gender: {
    type: Integer,
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
