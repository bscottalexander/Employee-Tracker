const Employee = require('../models/employee');
const Role = require('../../role/models/role');
const Department = require('../../department/models/department');

class MockEmployeeRepository {
    constructor() {
        this.data = [
            new Employee({
                id: 0,
                firstName: 'Jeff',
                lastName: 'Kaleshi',
                role: new Role({
                    id: 0,
                    title: 'Software Engineer',
                    salary: 120000,
                    department: new Department({ id: 0, name: 'Engineering' }),
                }),
            }),
            new Employee({
                id: 1,
                firstName: 'Brandon',
                lastName: 'Alexander',
                role: new Role({
                    id: 0,
                    title: 'Software Engineer',
                    salary: 120000,
                    department: new Department({ id: 0, name: 'Engineering' }),
                }),
                manager: new Employee({
                    id: 0,
                    firstName: 'Jeff',
                    lastName: 'Kaleshi',
                    role: new Role({
                        id: 0,
                        title: 'Software Engineer',
                        salary: 120000,
                        department: new Department({
                            id: 0,
                            name: 'Engineering',
                        }),
                    }),
                }),
            }),
            new Employee({
                id: 2,
                firstName: 'Shannon',
                lastName: 'Fales',
                role: new Role({
                    id: 1,
                    title: 'Marketing Specialist',
                    salary: 70000,
                    department: new Department({ id: 1, name: 'Marketing' }),
                }),
            }),
        ];
    }

    async getAllEmployees() {
        return this.data;
    }

    async addEmployee({employee} = {}) {
        employee.setID({id: this.data[this.data.length - 1].getID() + 1});
        this.data.push(employee);
    }

    async updateEmployee({employee} = {}) {
        const id = this.data.findIndex((currentEmployee) => currentEmployee.getID() === employee.getID());
        this.data[id] = employee;
    }
}

module.exports = MockEmployeeRepository;
