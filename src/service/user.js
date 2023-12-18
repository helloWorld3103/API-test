const { getAllUsersDAO, createUserDAO,loginUserDAO} = require('../dao/user')

const getAllUsersService = async () => {
    const users = await getAllUsersDAO()
    return users
  }

const createUserService = async (username,password,email,salt) => {
  const users = await createUserDAO(username,password,email,salt)
  return users
}

const loginUserService = async (username,password,email,salt) => {
  const users = await loginUserDAO(username,password,email,salt)
  return users
}

module.exports = {
  getAllUsersService,  
  createUserService,
  loginUserService

}
