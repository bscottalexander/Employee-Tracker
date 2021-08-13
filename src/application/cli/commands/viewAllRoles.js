const getAllRoles = require("../../../core/role/usecases/getAllRoles");

const viewAllRoles = async ({ repositories }) => {

    const roles = await getAllRoles({ roleRepository: repositories.role });
    console.table(roles.map((role) => ({
        id: role.getID(),
        title: role.getTitle(),
        salary: role.getSalary(),
        department_name: role.getDepartment().getName()
    })))

};

module.exports = viewAllRoles;