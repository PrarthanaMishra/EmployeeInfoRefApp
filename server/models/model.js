var mongoose = require("mongoose");
var employeeSchema = mongoose.Schema(
    {
        name: String,
        deptCode: String,
        deptName: String
    }
);
module.exports = mongoose.model('employeeInfoModel', employeeSchema);

