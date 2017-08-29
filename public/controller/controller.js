app.controller('employeeInfoController', ['$scope', 'employeeInfo', 'ngDialog',

    function ($scope, employeeInfo, ngDialog) {
        $scope.employeeData = {};
        $scope.employeeRecord = {};
        $scope.ngDialog = ngDialog;

        $scope.getEmployeeList = function () {
            employeeInfo.getEmployeeInfo().then(function (resp) {
                console.log(resp);
                $scope.employeeList = resp.data;
            },
                function (err) {
                    console.log(err);
                });
        }

        $scope.createEmpInfo = function (employeeData) {
            employeeInfo.createEmployeeInfo(employeeData).then(function (resp) {
                console.log(resp);
                $scope.employeeList.push(resp.data);
            },
                function (err) {
                    console.log(err);
                }
            );
        }
        $scope.removeEmployee = function (id, index) {
            employeeInfo.removeEmployeeInfo(id).then(function (resp) {
                $scope.employeeList.splice(index, 1);
            },
                function (err) {
                    console.log(err);
                }
            );
        }
        $scope.updateEmployee = function (employeeData, index, id) {
            employeeInfo.updateEmployeeInfo(employeeData, id).then(function (resp) {
                console.log(resp);
                $scope.employeeList[index] = resp.data;
            },
                function (err) {
                    console.log(err);
                });
        }

        $scope.openEditModal = function (empRecord, index) {
            $scope.index = index;
            ngDialog.open({ template: '../view/editPage.html', className: 'ngdialog-theme-default', data: empRecord, controller: 'employeeInfoController' });
        }

        $scope.getEmployeeList();
    }]);