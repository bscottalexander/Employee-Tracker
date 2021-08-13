const Role = require('../models/role');
const Department = require('../../department/models/department');

class MockRoleRepository {
    constructor() {
        this.data = [
            new Role({
                id: 0,
                title: 'Software Engineer',
                salary: 120000,
                department: new Department({ id: 0, name: 'Engineering' }),
            }),
            new Role({
                id: 1,
                title: 'Marketing Specialist',
                salary: 70000,
                department: new Department({ id: 1, name: 'Marketing' }),
            }),
        ];
    }

    async getAllRoles() {
        return this.data;
    }

    async addRole({ role } = {}) {
        role.setID({id: this.data[this.data.length - 1].getID() + 1});
        console.log(role);
        this.data.push(role);
    }
}

module.exports = MockRoleRepository;
