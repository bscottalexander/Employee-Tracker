const Department = require("../models/department");

class MockDepartmentRepository {
    constructor() {
        this.data = [
            new Department({ id: 0, name: "Engineering" }),
            new Department({ id: 1, name: "Marketing" })
        ]
    }

    async getAllDepartments() {
        return this.data;
    }

    async addDepartment({ department } = {}) {
        department.setID({id: this.data[this.data.length - 1].getID() + 1 })
        this.data.push(department)
    }
}

module.exports = MockDepartmentRepository;