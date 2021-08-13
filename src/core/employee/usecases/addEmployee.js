const addEmployee = ({ employeeRepository, employee } = {}) => {
    return employeeRepository.addEmployee({employee});
}

module.exports = addEmployee;