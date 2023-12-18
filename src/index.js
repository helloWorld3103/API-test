const express = require('express')
require('dotenv').config();
const role = require('../src/routes/role')
const user = require('../src/routes/user')


const app = express()
const PORT = 3001

app.use(express.json())
app.use(role)
app.use(user)

app.get("/", (req, res) => {
  
    // the responseMessage object extracts its values from environment variables
    // If a value is not found, it instead stores the string "not found"
    const responseMessage = {
        SECRET_KEY: process.env.SECRET_KEY || "Not found",
        apiBaseUrl: process.env.apiBaseUrl || "Not found"
    }
    res.send(responseMessage)
 })





app.listen(
    PORT,
    () => console.log(`was created on http://localhost:${PORT}`)
)



