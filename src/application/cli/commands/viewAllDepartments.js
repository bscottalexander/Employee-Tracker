const getAllDepartments = require("../../../core/department/usecases/getAllDepartments");

const viewAllDepartments = async ({ repositories }) => {
  const departments = await getAllDepartments({
    departmentRepository: repositories.department,
  });

  console.table(
    departments.map((department) => ({
      id: department.getID(),
      name: department.getName(),
    }))
  );
};

module.exports = viewAllDepartments;
