app.factory('employeeInfo', ['$http', function ($http) {
    var name = "";
    var deptCode = "";
    var deptName = "";

    this.getEmployeeInfo = function () {
        return $http.get('/employeeInfo');
    }
    this.createEmployeeInfo = function (employeeData) {
        return $http.post('/employeeInfo', employeeData);

    }
    this.removeEmployeeInfo = function (id) {
        return $http.delete('/employeeInfo/' + id);
    }
    this.updateEmployeeInfo = function (employeeData, id) {
        // var id = employeeData._id;
        console.log("id " + id);
        return $http.put('/employeeInfo/' + id, employeeData);
    }


    return this;

}]);


