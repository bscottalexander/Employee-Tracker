const inquirer = require('inquirer');
const Department = require('../../../core/department/models/department');
const AddDepartmentUseCase = require('../../../core/department/usecases/addDepartment');
const addDepartment = async ({ repositories } = {}) => {
    const questions = [
        {
            type: 'input',
            name: 'name',
            message: 'What is the Department name?',
        },
    ];
    const answers = await inquirer.prompt(questions);
    const department = new Department({ name: answers.name });
    await AddDepartmentUseCase({
        departmentRepository: repositories.department,
        department,
    });
};

module.exports = addDepartment;
