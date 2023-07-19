const { getAllUsersService, createUserService } = require('../service/user')
const { checkExistingUserOrEmail } = require('../dao/user')
const bcrypt = require('bcrypt');

const getAllUsers = async (req, res) => {
  try {
    const users = await getAllUsersService()
    res.status(200).json(users)
  } catch (error) {
    res.status(500).json(error)
  }
}


const createUser = async (req, res) => {
  try {
    const { user, password: FirstPassword, email } = req.body;
    //Es necesario el await para el funcionamiento de la funcion
    if (await checkExistingUserOrEmail(user, email) === false) {
      //se genera el salt
      const salt = await bcrypt.genSalt(10);
      // se crea el hash de la conquetacion
      const password = await bcrypt.hash(FirstPassword, salt);
      const users = await createUserService(user, password, email, salt)
      res.status(200).json(users)
    } else {
      res.status(400).json('the user or email already exists')
    }
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

module.exports = {
  getAllUsers,
  createUser
}