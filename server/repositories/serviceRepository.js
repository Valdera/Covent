const Service = require("../models/serviceModel");
const catchAsync = require("../utils/catchAsync");

exports.createService = async (schedule, doctor) => {
  try {
    const createdAt = Date.now();

    const doc = await Service.create({
      createdAt: createdAt,
      schedule: schedule,
      doctor: doctor,
    });

    return doc;
  } catch (err) {
    return err;
  }
};

exports.getServiceByID = async (serviceId) => {
  try {
    const service = await Service.findById(serviceId);

    return service;
  } catch (err) {
    return err;
  }
};
