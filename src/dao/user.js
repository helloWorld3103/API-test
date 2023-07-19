const db = require('../db/db')

const getAllUsersDAO = async () => {
  const roles = await db.select(
    'id',
    'username',
    'password',
    'email',
    'salt'
  ).from('public.users')
  return roles
}

const createUserDAO = async (username, password, email, salt) => {
  const resp = await db('public.users')
    .returning(['id'])
    .insert({
      username,
      password,
      email,
      salt
    })
  return resp[0]
}

const checkExistingUserOrEmail = async (username, email) => {
  const result = await db.raw(`select count (*) from users where username = '${username}' or email = '${email}' `)
  return result.rows[0].count > 0
}
module.exports = {
  getAllUsersDAO,
  createUserDAO,
  checkExistingUserOrEmail
}