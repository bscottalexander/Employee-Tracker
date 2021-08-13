const getAllRoles = ({ roleRepository } = {}) => {
    return roleRepository.getAllRoles();
}

module.exports = getAllRoles;