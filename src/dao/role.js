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

const deleteRoleDAO = async (id) => {
  const resp = await db('public.roles')
    .where('id', id)
    .del()
  return resp
}

const updateRoleDAO = async (id, changes) => {

  const resp = await db('public.roles')
    .where('id', id)
    .update({
      'role': changes
    })
  return resp
}

module.exports = {
  getAllRolesDAO,
  createRoleDAO,
  deleteRoleDAO,
  updateRoleDAO
}