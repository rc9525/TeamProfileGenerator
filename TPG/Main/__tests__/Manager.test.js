const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

class Manager extends Employee {
    constructor(name, id, email) {
        super(name,id, email);
    }
}
getRole() {
    return "Manager";
}
module.exports = Manager;