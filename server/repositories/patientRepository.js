const Patient = require("../models/patientModel");

exports.createPatient = async (name, age, gender, address, phoneNumber,
  ktpNumber, diagonoseHistory, createdAt, updatedAt, createdBy, deletedAt) => {
  try {
    const doc = await Patient.create({
      name: name,
      age: age,
      gender: gender,
      address: address,
      phoneNumber: phoneNumber,
      ktpNumber: ktpNumber,
      diagonoseHistory: diagonoseHistory,
      createdAt: createdAt,
      updatedAt: updatedAt,
      createdBy: createdBy,
      deletedAt: deletedAt,
    });

    return doc;
  } catch (err) {
    return err;
  }
};
