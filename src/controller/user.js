const { getAllUsersService, createUserService, loginUserService } = require('../service/user')
const { checkExistingUserOrEmail, passwordCompare } = require('../dao/user')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const env = require('dotenv').config();
const crypto = require('crypto');



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
      const users = await createUserService(user, password, email)
      res.status(200).json(users)
    } else {
      res.status(400).json('the user or email already exists')
    }
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

const loginUser = async (req, res) => {
  try {
    const { user, password: FirstPassword, email } = req.body;
    if (await checkExistingUserOrEmail(user, email) === true) {
      if (await passwordCompare(FirstPassword, user, email) === true) {
        const payload = {
          user
        };
        const secretKey = crypto.randomBytes(32).toString('hex');
        process.env.SECRET_KEY = secretKey;
        const token = jwt.sign(payload, secretKey);
        res.status(200).json({ token, message: 'you are login' })
      } else {
        res.status(400).json('the user or email are incorrect')
      }
    } else {
      res.status(400).json('Invalid credentials')
    }
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

module.exports = {
  getAllUsers,
  createUser,
  loginUser
}