const addRole = ({ roleRepository, role } = {}) => {
    return roleRepository.addRole({role});
}

module.exports = addRole;