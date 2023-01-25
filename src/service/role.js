const { getAllRolesDAO, createRoleDAO, deleteRoleDAO, updateRoleDAO } = require('../dao/role')

const getAllRolesService = async () => {
  const roles = await getAllRolesDAO()
  return roles
}
const createRoleService = async (role) => {
  const roles = await createRoleDAO(role)
  return roles
}
const deleteRoleService = async (id) => {
  const roles = await deleteRoleDAO(id)
  return roles
}
const updateRoleService = async (id, changes) => {
  const roles = await updateRoleDAO(id, changes)
  return roles
}

module.exports = {
  getAllRolesService,
  createRoleService,
  deleteRoleService,
  updateRoleService

}
