const Role = require('../models/role');
const Department = require('../../department/models/department');
const { query } = require('../../../infrastructure/sql');

class MySQLRoleRepository {
    constructor({ dbClient }) {
        this.dbClient = dbClient;
    }

    async getAllRoles() {
        const sql = `
        SELECT
            role.id,
            role.title,
            role.salary,
            role.department_id as department_id,
            department.name as department_name
        FROM
            role
            JOIN department ON role.department_id = department.id;
        `;
        const { results } = await query({ client: this.dbClient, sql });
        const roles = results.map(
            (role) =>
                new Role({
                    id: role.id,
                    title: role.title,
                    department: new Department({
                        id: role.department_id,
                        name: role.department_name,
                    }),
                })
        );
        return roles;
    }

    async addRole({ role } = {}) {
        const sql = `
        INSERT INTO
            role (title, salary, department_id)
        VALUES
            (?, ?, ?)
        `
        const params = [role.title, role.salary, role.department.id];
        await query({ client: this.dbClient, sql, params });
        return;
    }
}

module.exports = MySQLRoleRepository;
