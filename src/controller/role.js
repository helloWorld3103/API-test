const { getAllRolesService, createRoleService } = require('../service/role')

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
    const roles = await createRoleService(role)
    res.status(200).json(roles)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}


module.exports = { getAllRoles, createRole }