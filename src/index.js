const express = require('express')
const role = require('../src/routes/role')
const user = require('../src/routes/user')


const app = express()
const PORT = 3001

app.use(express.json())
app.use(role)
app.use(user)

app.listen(
    PORT,
    () => console.log(`was created on http://localhost:${PORT}`)
)



