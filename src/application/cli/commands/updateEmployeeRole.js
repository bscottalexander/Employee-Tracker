const inquirer = require('inquirer');
const getAllEmployees = require('../../../core/employee/usecases/getAllEmployees');
const getAllRoles = require('../../../core/role/usecases/getAllRoles');
const updateEmployee = require("../../../core/employee/usecases/updateEmployee");

const updateEmployeeRole = async ({ repositories }) => {

    const employees = (
        await getAllEmployees({ employeeRepository: repositories.employee })
    ).map((employee) => ({
        name: employee.getFullName(),
        value: employee,
    }));

    const roles = (
        await getAllRoles({ roleRepository: repositories.role })
    ).map((role) => ({
        name: role.getTitle(),
        value: role,
    }));

    const questions = [
        {
            type: 'list',
            name: 'employee',
            message: "Which employee's would you like to update?",
            choices: employees,
        },
        {
            type: 'list',
            name: 'role',
            message: "What would you like their role to be?",
            choices: roles,
        },
    ];

    const answers = await inquirer.prompt(questions);
    const employee = answers.employee;
    employee.setRole({role: answers.role});

    await updateEmployee({employeeRepository: repositories.employee, employee});
};

module.exports = updateEmployeeRole;