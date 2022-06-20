const Service = require("../models/serviceModel");
const catchAsync = require('../utils/catchAsync');

exports.createService = async (createdAt, schedule, doctor, updateAt, createdBy) => {
    try {
        const doc = await Service.create({
            createdAt: createdAt,
            schedule: schedule,
            doctor: doctor,
            updateAt: createdAt,
            createdBy: createdBy
        });

        return doc;
    } catch (err) {
        return err;
    }
};

exports.readServiceID = async (createdAt, schedule, doctor, updateAt, createdBy, deletedAt) => {
    //
    // console.log(tour);
    try{
        const ser = await Service.findById(req.params.serviceId);
        console.log(ser);
    } catch (err){
        return err;
    }

};
