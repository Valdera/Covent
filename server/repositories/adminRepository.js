const Admin = require("../models/adminModel");
const catchAsync = require("../utils/catchAsync");

exports.createAdmin = async (name, role) => {
    try {
        const createdAt = Date.now();

        const admin = await Admin.create({
            name: name,
            role: role,
            createdAt: createdAt,
            updatedAt: createdAt
        });

        return admin;
    } catch (err) {
        return err;
    }
};

exports.getAdminByID = async (adminId) => {
    try {
        const admin = await Admin.findById(adminId);

        return admin;
    } catch (err) {
        return err;
    }
};

exports.getAllAdmin = async () => {
    try {
        const doc = await Admin.find();

        return doc;
    } catch (err) {
        return err;
    }
};

exports.updateAdminByID = async (adminId, body) => {
    body['updatedAt'] = Date.now();
    try {
        const admin = await Admin.findByIdAndUpdate(adminId, body, {
            new: true,
            runValidators: true,
        });

        return admin;
    } catch (err) {
        return err;
    }
};

exports.deleteAdminByID = async (adminId) => {
    // Do we need this because there is deleted by in the table?

    try {
        const admin = await Admin.findByIdAndDelete(adminId);

        return admin;
    } catch (err) {
        return err;
    }
};

