const express = require('express')
const app = express()
const PORT = 3001

app.use(express.json())

app.listen(
    PORT,
    () => console.log(`was created on http://localhost:${PORT}`)
)

app.get('/tshirt', (req, res) => {
    res.status(200).send({
        tshirt: '👕',
        size: 'large'
    })
})

app.post('/tshirt/:id', (req, res) => {
    

    const { id } = req.params
    const { logo } = req.body

    if (!logo) {

        res.status(418).send({ message: 'we need a logo' })

    }

    res.send({
        tshirt: `👕 with you ${logo} and Id of ${id}`,
    })
})
