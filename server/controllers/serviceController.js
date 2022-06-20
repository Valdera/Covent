const catchAsync = require("../utils/catchAsync");
const CustomError = require("../utils/customError");

const serviceRepository = require("../repositories/serviceRepository");

exports.createService = catchAsync(async (req, res, next) => {
  // validasi request
  const { schedule, doctor } = req.body;


  // insert to database
  const service = await serviceRepository.createService(schedule, doctor);

  if (service instanceof Error) {
    return next(new CustomError("Cannot create document", 404));
  }

  // send response
  res.status(201).json({
    status: "success",
    data: service,
  });
});

exports.getServiceByID = catchAsync(async (req, res, next) => {
  const serviceId = req.params.id;
  if (!serviceId) {
    return next(new CustomError("Please input a correct id", 401));
  }

  // insert to database
  const patient = await serviceRepository.getServiceByID(serviceId);

  if (patient instanceof Error) {
    return next(new CustomError("Cannot create document", 404));
  }

  // send response
  res.status(200).json({
    status: "success",
    data: patient,
  });
});

exports.getAllService = catchAsync(async (req, res, next) => {
  const serviceList = await serviceRepository.getAllService();

  res.status(200).json({
    status: "success",
    data: serviceList,
  });
});

exports.deleteServiceById = catchAsync(async (req, res, next) => {
  const serviceId = req.params.id;
  if (!serviceId) {
    return next(new CustomError("Please input a correct id", 401));
  }
  const service = await serviceRepository.deleteServiceByID(serviceId);

  res.status(200).json({
    status: "success",
    data: service,
  });
});


exports.updateServiceById = catchAsync(async (req, res, next) => {
  const serviceId = req.params.id;
  req.body['UpdatedAt'] = Date.now(); // Check if this function work

  if (!serviceId) {
    return next(new CustomError("Please input a correct id", 401));
  }

  // insert to database
  const service = await serviceRepository.updateServiceByID(
      serviceId,
      req.body
  );

  if (service instanceof Error) {
    return next(new CustomError("Cannot update a service", 404));
  }

  // send response
  res.status(201).json({
    status: "success",
    data: service,
  });
});
