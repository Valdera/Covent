const Diagnose = require("../models/diagnoseModel");

exports.createPatient = async (service, doctorName, disease, description, 
    deletedAt, createdBy, createdAt, updatedAt) => {
  try {
    const doc = await Diagnose.create({
      service: service,
      doctorName: doctorName,
      disease: disease,
      description: description,
      deletedAt: deletedAt,
      createdBy: createdBy,
      createdAt: createdAt,
      updatedAt: updatedAt,
    });

    return doc;
  } catch (err) {
    return err;
  }
};