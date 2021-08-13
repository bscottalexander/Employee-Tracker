const inquirer = require('inquirer');
const getAllDepartments = require('../../../core/department/usecases/getAllDepartments');
const addRoleUseCase = require('../../../core/role/usecases/addRole');
const Role = require('../../../core/role/models/role');

const addRole = async ({ repositories } = {}) => {
    const departments = (
        await getAllDepartments({
            departmentRepository: repositories.department,
        })
    ).map((department) => ({ name: department.getName(), value: department }));

    const questions = [
        {
            type: 'input',
            name: 'title',
            message: 'What is the role title?',
        },
        {
            type: 'number',
            name: 'salary',
            message: 'What is the role salary?',
        },
        {
            type: 'list',
            name: 'department',
            choices: departments,
        },
    ];
    const answers = await inquirer.prompt(questions);
    const newRole = new Role({
        title: answers.title,
        salary: answers.salary,
        department: answers.department,
    });

    await addRoleUseCase({ roleRepository: repositories.role, role: newRole });
};

module.exports = addRole;
