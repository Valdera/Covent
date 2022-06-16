const catchAsync = require("../utils/catchAsync");
const CustomError = require("../utils/customError");

const patientRepository = require("../repositories/patientRepository");

exports.createPatient = catchAsync(async (req, res, next) => {
  // validasi request
  const { name, age, gender } = req.body;

  // insert to database
  const patient = await patientRepository.createPatient(name, age, gender);

  if (patient instanceof Error) {
    return next(new CustomError("Cannot create document", 404));
  }

  // send response
  res.status(200).json({
    status: "success",
    data: patient,
  });
});
