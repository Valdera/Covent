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
  address: {
    type: String,
    required: [true, "Please enter your address"],
  },
  phoneNumber: {
    type: String,
    required: [true, "Please enter your phone number"],
  },
  ktpNumber: {
    type: String,
    required: [true, "Please enter your NIK"],
  },
  diagnoseHistory: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Diagnose",
    },
  ],
  createdAt: {
    type: Date,
    required: [true, "Please enter the date"],
  },
  createdBy: {
    type: mongoose.Schema.ObjectId,
    ref: "Admin",
  },
  updatedAt: {
    type: Date,
    required: [true, "Please enter the date"],
  },
  deletedAt: {
    type: Date,
    required: [true, "Please enter the date"],
  },
});

const Patient = mongoose.model("Patient", patientSchema);

module.exports = Patient;
