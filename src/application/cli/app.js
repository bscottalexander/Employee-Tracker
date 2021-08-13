const inquirer = require('inquirer');
const mysql = require('mysql');
require('console.table');
const commands = require('./commands');
const MySQLDepartmentRepository = require('../../core/department/repositories/mysqlRepository');
const MySQLRoleRepository = require('../../core/role/repositories/mysqlRepository');
const MySQLEmployeeRepository = require('../../core/employee/repositories/mysqlRepository');

const MAIN_ACTIONS = {
    ViewAllEmployees: 'View All Employees',
    ViewAllRoles: 'View All Roles',
    ViewAllDepartments: 'View All Departments',
    AddEmployee: 'Add Employee',
    AddRole: 'Add Role',
    AddDepartment: 'Add Department',
    UpdateEmployeeRole: 'Update Employee Role',
    Quit: 'Quit',
};

const getMainMenuAction = async () => {
    const questions = [
        {
            type: 'list',
            name: 'mainMenuAction',
            message: 'What would you like to do?',
            choices: [
                MAIN_ACTIONS.ViewAllEmployees,
                MAIN_ACTIONS.ViewAllRoles,
                MAIN_ACTIONS.ViewAllDepartments,
                MAIN_ACTIONS.AddEmployee,
                MAIN_ACTIONS.AddRole,
                MAIN_ACTIONS.AddDepartment,
                MAIN_ACTIONS.UpdateEmployeeRole,
                MAIN_ACTIONS.Quit,
            ],
        },
    ];
    return (await inquirer.prompt(questions)).mainMenuAction;
};

const main = async () => {
    let running = true;

    const dbClient = mysql.createConnection({
        host: 'localhost',
        user: 'employee-tracker-user',
        database: 'employee-tracker',
        password: 'password123',
    });

    const repositories = {
        department: new MySQLDepartmentRepository({ dbClient }),
        role: new MySQLRoleRepository({ dbClient }),
        employee: new MySQLEmployeeRepository({ dbClient }),
    };

    while (running) {
        const mainAction = await getMainMenuAction();

        switch (mainAction) {
            case MAIN_ACTIONS.ViewAllEmployees: {
                await commands.viewAllEmployees({ repositories });
                break;
            }
            case MAIN_ACTIONS.ViewAllRoles: {
                await commands.viewAllRoles({ repositories });
                break;
            }
            case MAIN_ACTIONS.ViewAllDepartments: {
                await commands.viewAllDepartments({ repositories });
                break;
            }
            case MAIN_ACTIONS.AddEmployee: {
                await commands.addEmployee({ repositories });
                break;
            }
            case MAIN_ACTIONS.AddRole: {
                await commands.addRole({ repositories });
                break;
            }
            case MAIN_ACTIONS.AddDepartment: {
                await commands.addDepartment({ repositories });
                break;
            }
            case MAIN_ACTIONS.UpdateEmployeeRole: {
                await commands.updateEmployeeRole({ repositories });
                break;
            }
            case MAIN_ACTIONS.Quit: {
                running = false;
                break;
            }
        }
    }

    dbClient.end();
};

if (require.main === module) {
    main();
}
