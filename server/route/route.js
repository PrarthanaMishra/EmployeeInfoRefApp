'use strict'
module.exports = function (app) {
    var routeFunction = require('../apis/api');
    console.log('route');

    app.route('/employeeInfo')
        .get(routeFunction.getAllEmployeeInfo)
        .post(routeFunction.createEmployeeInfo);


    app.route('/employeeInfo/:abc')
        .delete(routeFunction.removeEmployeeInfo)
        .put(routeFunction.updateEmployeeInfo);
}