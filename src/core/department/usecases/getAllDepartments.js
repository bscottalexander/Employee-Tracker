const getAllDepartments = ({ departmentRepository } = {}) => {
    return departmentRepository.getAllDepartments();
}

module.exports = getAllDepartments;