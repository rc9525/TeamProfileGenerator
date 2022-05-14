const Intern = require("../lib/Intern");
const Employee = require("../lib/Employee");

class Intern extends Employee {
    constructor(name, id, email) {
        super(name,id, email);
    }
}
getRole() {
    return "Intern";
}
module.exports = Intern;
