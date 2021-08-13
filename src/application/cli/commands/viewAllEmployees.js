const getAllEmployees = require("../../../core/employee/usecases/getAllEmployees");

const viewAllEmployees = async ({ repositories } = {}) => {
    const employees = await getAllEmployees({ employeeRepository: repositories.employee });
    console.table(employees.map((employee) => ({
        id: employee.getID(),
        name: employee.getFullName(),
        title: employee.getRole().getTitle(),
        salary: employee.getRole().getSalary(),
        department: employee.getRole().getDepartment().getName(),
        manager: employee.getManager()?.getFullName(),
    })));
};

module.exports = viewAllEmployees;