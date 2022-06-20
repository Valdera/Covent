const catchAsync = require("../utils/catchAsync");
const CustomError = require("../utils/customError");

const serviceRepository = require("../repositories/serviceRepository");

exports.createService = catchAsync(async (req, res, next) => {
    // validasi request
    const { createdAt, schedule, doctor, updateAt, createdBy } = req.body;
    // insert to database
    const service = await serviceRepository.createService(createdAt, schedule, doctor, updateAt, createdBy);

    if (service instanceof Error) {
        return next(new CustomError("Cannot create document", 404));
    }

    // send response
    res.status(200).json({
        status: "success",
        data: service,
    });
});

exports.readServiceID = catchAsync(async (req, res, next) => {
    // validasi request
    const {createdAt, schedule, doctor, updateAt, createdBy, deletedAt } = req.body;

    // insert to database
    const patient = await serviceRepository.readServiceID(createdAt, schedule, doctor, updateAt, createdBy, deletedAt);

    if (patient instanceof Error) {
        return next(new CustomError("Cannot create document", 404));
    }

    // send response
    res.status(200).json({
        status: "success",
        data: patient,
    });
});
