const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  available: {
    type: Number,
    required: [true, "Please enter your name"],
  },

});

const Schedule = mongoose.model("Schedule", scheduleSchema);

module.exports = Schedule;