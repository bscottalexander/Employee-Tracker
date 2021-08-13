const Department = require('../models/department');
const { query } = require('../../../infrastructure/sql');

class MySQLDepartmentRepository {
    constructor({ dbClient }) {
        this.dbClient = dbClient;
    }

    async getAllDepartments() {
        const sql = `SELECT * FROM department`;
        const { results } = await query({ client: this.dbClient, sql });
        const departments = results.map(({ id, name }) => new Department({ id, name }));
        return departments;
    }

    async addDepartment({ department } = {}) {
        const sql = `INSERT INTO department (name) VALUES (?)`;
        const params = [department.name];
        await query({ client: this.dbClient, sql, params });
        return;
    }
}

module.exports = MySQLDepartmentRepository;
