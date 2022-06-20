const Schedule = require("../models/scheduleModel");

exports.createSchedule = async (available, scheduleStart, scheduleEnd) => {
  try {
    const doc = await Schedule.create({
      available: available,
      scheduleStart: scheduleStart,
      scheduleEnd: scheduleEnd,
    });

    return doc;
  } catch (err) {
    return err;
  }
};