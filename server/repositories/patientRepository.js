const Patient = require("../models/patientModel");

exports.createPatient = async (name, age, gender) => {
  try {
    const doc = await Patient.create({
      name: name,
      age: age,
      gender: gender,
    });

    return doc;
  } catch (err) {
    return err;
  }
};
