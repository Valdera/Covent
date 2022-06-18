const catchAsync = require("../utils/catchAsync");
const CustomError = require("../utils/customError");

const scheduleRepository = require("../repositories/scheduleRepository");

exports.createSchedule = catchAsync(async (req, res, next) => {
  // validasi request
  const { available, scheduleStart, scheduleEnd } = req.body;

  // insert to database
  const schedule = await scheduleRepository.createPatient(available, scheduleStart, scheduleEnd);

  if (schedule instanceof Error) {
    return next(new CustomError("Cannot create document", 404));
  }

  // send response
  res.status(200).json({
    status: "success",
    data: schedule,
  });
});