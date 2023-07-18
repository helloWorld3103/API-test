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
    const user = req.body.user
    const FirstPassword = req.body.password
    const email = req.body.email
    const check = await checkExistingUserOrEmail(user, email)
    if (check == false) {
      //se genera el salt
      const salt = await bcrypt.genSalt(10);
      //se concatena con la contrasena
      const PaswordAndSalt = FirstPassword + salt
      // se crea el hash de la conquetacion
      const password = await bcrypt.hash(PaswordAndSalt, 10);
      const users = await createUserService(user, password, email, salt)
      res.status(200).json(users)
    } else {
      res.status(400).json('El usuario o el correo ya existe')
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