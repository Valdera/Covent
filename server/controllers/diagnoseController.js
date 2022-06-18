const catchAsync = require("../utils/catchAsync");
const CustomError = require("../utils/customError");

const diagnoseRepository = require("../repositories/diagnoseRepository");

exports.createDiagnose = catchAsync(async (req, res, next) => {
  // validasi request
  const { service, doctorName, disease, description, 
    deletedAt, createdBy, createdAt, updatedAt } = req.body;

  // insert to database
  const diagnose = await diagnoseRepository.createDiagnose(service, doctorName, disease,
    description, deletedAt, createdBy, createdAt, updatedAt);

  if (diagnose instanceof Error) {
    return next(new CustomError("Cannot create document", 404));
  }

  // send response
  res.status(200).json({
    status: "success",
    data: diagnose,
  });
});
