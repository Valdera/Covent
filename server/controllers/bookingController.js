const catchAsync = require("../utils/catchAsync");
const CustomError = require("../utils/customError");

const bookingRepository = require("../repositories/bookingRepository");

exports.createBooking = catchAsync(async (req, res, next) => {
    // validasi request
    const { patientId, service, scheduleId, acceptedBy } = req.body;


    // insert to database
    const booking = await bookingRepository.createBooking(patientId, service, scheduleId, acceptedBy);

    if (booking instanceof Error) {
        return next(new CustomError("Cannot create admin", 404));
    }

    // send response
    res.status(201).json({
        status: "success",
        data: booking,
    });
});

exports.getBookingByID = catchAsync(async (req, res, next) => {
    const bookingId = req.params.id;
    if (!bookingId) {
        return next(new CustomError("Please input a correct id", 401));
    }

    // insert to database
    const booking = await bookingRepository.getBookingByID(bookingId);

    if (booking instanceof Error) {
        return next(new CustomError("Cannot create document", 404));
    }

    // send response
    res.status(200).json({
        status: "success",
        data: booking,
    });
});

exports.getAllBooking = catchAsync(async (req, res, next) => {
    const bookingList = await bookingRepository.getAllBooking();

    res.status(200).json({
        status: "success",
        data: bookingList,
    });
});

exports.deleteBookingById = catchAsync(async (req, res, next) => {
    const bookingId = req.params.id;
    if (!bookingId) {
        return next(new CustomError("Please input a correct id", 401));
    }
    const booking = await bookingRepository.deleteBookingByID(bookingId);

    res.status(200).json({
        status: "success",
        data: booking,
    });
});

exports.updateBookingById = catchAsync(async (req, res, next) => {
    const bookingId = req.params.id;


    if (!bookingId) {
        return next(new CustomError("Please input a correct id", 401));
    }

    // insert to database
    const booking = await bookingRepository.updateBookingByID(
        bookingId,
        req.body
    );

    if (booking instanceof Error) {
        return next(new CustomError("Cannot update an admin", 404));
    }

    // send response
    res.status(201).json({
        status: "success",
        data: booking,
    });
});
