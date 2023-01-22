const { getAllRolesDAO, createRoleDAO } = require('../dao/role')

const getAllRolesService = async () => {
  const roles = await getAllRolesDAO()
  return roles
}
const createRoleService = async (role) => {
  const roles = await createRoleDAO(role)
  return roles
}

module.exports = { getAllRolesService, createRoleService }
