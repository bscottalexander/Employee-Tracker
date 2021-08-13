const inquirer = require('inquirer');
const Employee = require('../../../core/employee/models/employee');
const getAllEmployees = require('../../../core/employee/usecases/getAllEmployees');
const getAllRoles = require('../../../core/role/usecases/getAllRoles');
const addEmployeeUseCase = require('../../../core/employee/usecases/addEmployee');

const addEmployee = async ({ repositories } = {}) => {
    const roles = (
        await getAllRoles({ roleRepository: repositories.role })
    ).map((role) => ({
        name: role.getTitle(),
        value: role,
    }));

    const employees = (
        await getAllEmployees({ employeeRepository: repositories.employee })
    ).map((employee) => ({
        name: employee.getFullName(),
        value: employee,
    }));

    const questions = [
        {
            type: 'input',
            name: 'firstName',
            message: "What is the employee's first name?",
        },
        {
            type: 'input',
            name: 'lastName',
            message: "What is the employee's last name?",
        },
        {
            type: 'list',
            name: 'role',
            message: "What is the employee's role?",
            choices: roles,
        },
        {
            type: 'list',
            name: 'manager',
            message: "who is the employee's manager?",
            choices: [...employees, { name: 'No Manager', value: null }],
        },
    ];
    const answers = await inquirer.prompt(questions);

    const newEmployee = new Employee({
        firstName: answers.firstName,
        lastName: answers.lastName,
        role: answers.role,
        manager: answers.manager,
    });
    await addEmployeeUseCase({
        employeeRepository: repositories.employee,
        employee: newEmployee,
    });
};

module.exports = addEmployee;
