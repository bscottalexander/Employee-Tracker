class Role {
    constructor({ id, title, salary, department } = {}) {
        this.id = id;
        this.title = title;
        this.salary = salary;
        this.department = department;
    }

    getID() {
        return this.id;
    }

    setID({ id }) {
        this.id = id;
    }

    getTitle() {
        return this.title;
    }

    setTitle({ title }) {
        this.title = title;
    }

    getSalary() {
        return this.salary;
    }

    setSalary({ salary }) {
        this.salary = salary;
    }

    getDepartment() {
        return this.department;
    }

    setDepartment({ department }) {
        this.department = department;
    }
}

module.exports = Role;