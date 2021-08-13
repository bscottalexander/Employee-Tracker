const updateEmployee = ({ employeeRepository, employee } = {}) => {
    return employeeRepository.updateEmployee({employee});
}

module.exports = updateEmployee;