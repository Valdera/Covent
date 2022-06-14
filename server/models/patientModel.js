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

const bookingSchema = new mongoose.Schema({
  patientId:
      {
        type: mongoose.Schema.ObjectId,
        ref: "Patient"
  },
  status: {
    type: String,
    required: [true, "Please enter the status"],
    enum: {
      values: ['CREATED', 'ACCEPTED', 'DONE', 'CANCELLED'],
      message: "{VALUE} is not supported",
    }
  },
  service: {
    type: mongoose.Schema.ObjectId,
    ref: 'Service',
    required: [true, 'Review must belong to a user']
  },
  scheduleId:
    {
      type: mongoose.Schema.ObjectId,
      ref: "Schedule",
    },
  acceptedBy:
      {
        type: mongoose.Schema.ObjectId,
        ref: "Admin",
      },
  createdAt: {
    type: Date,
    required: [true, "Please enter the date"],
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

const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your name"],
  },
  role: {
    type: String,
    required: [true, "Please enter the role"],
    enum: {
      values: ['DOCTOR', 'STAFF'],
      message: "{VALUE} is not supported",
    }
  },
  createdAt: {
    type: Date,
    required: [true, "Please enter the date"],
  },
  updatedAt: {
    type: Date,
    required: [true, "Please enter the date"],
  },
  deletedAt: {
    type: Date,
    required: [true, "Please enter the date"],
  }
});

const serviceSchema = new mongoose.Schema({
  doctor: {
    type: mongoose.Schema.ObjectId,
    ref: "Admin"
  },
  schedule: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Schedule",
    },],
  createdAt: {
    type: Date,
    required: [true, "Please enter the date"],
  },
  createdBy:
      {
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
  }
});


bookingSchema.pre(/^find/, function(next) {

  this.populate({
    path: 'user',
    select: 'name photo'
  });
  next();
});
