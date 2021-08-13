const addDepartment = ({ departmentRepository, department } = {}) => {
    return departmentRepository.addDepartment({department});
}

module.exports = addDepartment;