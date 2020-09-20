const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, email, id, role, github) {
        super(name, email, id, role);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }
}
module.exports = Engineer;