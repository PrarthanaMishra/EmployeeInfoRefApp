'use strict'
var mongoose = require('mongoose');
var employeeInfoModel = require('../models/model');

exports.getAllEmployeeInfo = function (req, res) {
    employeeInfoModel.find({}, function (err, empInfo) {
        if (err) {
            return res.send(err);
        }
        return res.send(empInfo);
    })
};

exports.createEmployeeInfo = function (req, res) {
    var newCreateEmployeeInfo = new employeeInfoModel(req.body);
    newCreateEmployeeInfo.save(function (err, empInfo) {
        if (err) {
            return res.send(err);
        }
        return res.send(empInfo);
    })
};

exports.updateEmployeeInfo = function (req, res) {

    employeeInfoModel.findOneAndUpdate(
        { _id: req.params.abc },
        req.body,
        { new: true },
        function (err, empInfo) {
            if (err) {
                return res.send(err);
            }
            return res.send(empInfo);
        }
    )
};

exports.removeEmployeeInfo = function (req, res) {
    employeeInfoModel.remove(
        { _id: req.params.abc },
        function (err, empInfo) {
            if (err) {
                return res.send(err);
            }
            return res.send(empInfo);
        })
};