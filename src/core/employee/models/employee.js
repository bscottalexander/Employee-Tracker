class Employee {
    constructor({id, firstName, lastName, role, manager} = {}) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.role = role;
        this.manager = manager;
    }

    getID() {
        return this.id;
    }

    setID({id} = {}) {
        this.id = id;
    }

    getFirstName() {
        return this.firstName;
    }

    setFirstName({firstName} = {}) {
        this.firstName = firstName;
    }

    getLastName() {
        return this.lastName;
    }

    setLastName({lastName} = {}) {
        this.lastName = lastName;
    }

    getRole() {
        return this.role;
    }

    setRole({role} = {}) {
        this.role = role;
    }

    getManager() {
        return this.manager;
    }

    setManager({ manager } = {}) {
        this.manager = manager;
    }

    getFullName() {
        return this.firstName + " " + this.lastName;
    }
}

module.exports = Employee;