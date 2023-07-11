const { getAllRolesService, createRoleService, deleteRoleService, updateRoleService } = require('../service/role')

const getAllRoles = async (req, res) => {
  try {
    const roles = await getAllRolesService()
    res.status(200).json(roles)
  } catch (error) {
    res.status(500).json(error)
  }
}

const createRole = async (req, res) => {
  try {
    const role = req.body.role
    console.log('test', role)
    const roles = await createRoleService(role)
    res.status(200).json(roles)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}
//request,response
const deleteRole = async (req, res) => {
  try {
    const id = req.params.id
    const response = await deleteRoleService(id)
    res.status(200).json(response)

  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

const updateRole = async (req, res) => {
  try {
    const id = req.params.id
    const changes = req.body.role
    const response = await updateRoleService(id, changes)
    res.status(200).json(response)

  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

module.exports = {
  getAllRoles,
  createRole,
  deleteRole,
  updateRole
}