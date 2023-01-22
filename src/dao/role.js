const db = require('../db/db')

const getAllRolesDAO = async () => {
  const roles = await db.select(
    'id',
    'role'
  ).from('public.roles')
  return roles
}

const createRoleDAO = async (role) => {
  const resp = await db('public.roles')
    .returning(['id'])
    .insert({
      role
    })
  return resp[0]
}

module.exports = {
  getAllRolesDAO,
  createRoleDAO
}