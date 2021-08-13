const getAllEmployees = ({ employeeRepository } = {}) => {
    return employeeRepository.getAllEmployees();
}

module.exports = getAllEmployees;