const Engineer = require("../lib/Engineer");

class Engineer extends Employee {
    constructor(name, id, email) {
        super(name,id, email);
    }
}
getRole() {
    return "Engineer";
}
module.exports = Manager;



