const Employee = require('../models/employee');
const Role = require('../../role/models/role');
const Department = require('../../department/models/department');
const { query } = require('../../../infrastructure/sql');

class MySQLEmployeeRepository {
    constructor({ dbClient }) {
        this.dbClient = dbClient;
    }

    async getAllEmployees() {
        const sql = `
        SELECT
    employee.id,
    employee.first_name,
    employee.last_name,
    employee.role_id,
    employee.manager_id,
    manager.first_name as manager_first_name,
    manager.last_name as manager_last_name,
    role.title,
    role.salary,
    role.department_id,
    department.name as department_name
FROM
    employee
    JOIN role ON employee.role_id = role.id
    JOIN department ON role.department_id = department.id
    LEFT JOIN employee as manager ON employee.manager_id = manager.id
    

       `;
        const { results } = await query({ client: this.dbClient, sql });
        const employees = results.map(
            (employee) =>
                new Employee({
                    id: employee.id,
                    firstName: employee.first_name,
                    lastName: employee.last_name,
                    role: new Role({
                        id: employee.role_id,
                        title: employee.title,
                        salary: employee.salary,
                        department: new Department({
                            id: employee.department_id,
                            name: employee.department_name,
                        }),
                    }),
                    manager: employee.manager_id
                        ? new Employee({
                              firstName: employee.manager_first_name,
                              lastName: employee.manager_last_name,
                          })
                        : null,
                })
        );
        return employees;
    }

    async addEmployee({ employee } = {}) {
        const sql = `
        INSERT employee (first_name, last_name, role_id, manager_id)
        VALUES
            (?, ?, ?, ?);
        `;
        const params = [
            employee.getFirstName(),
            employee.getLastName(),
            employee.role.getID(),
            employee.manager?.getID(),
        ];
        await query({ client: this.dbClient, sql, params });
    }

    async updateEmployee({ employee } = {}) {
        const sql = `
        UPDATE
            employee
        SET
            role_id = ?
        WHERE employee.id = ?;
        `;
        const params = [
            employee.role.getID(),
            employee.getID()
        ];
        await query({ client: this.dbClient, sql, params });
    }
}

module.exports = MySQLEmployeeRepository;
