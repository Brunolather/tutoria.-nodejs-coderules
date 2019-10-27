const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.get('/', (req, res)=> {
    res.send('Hello World!')
})

const PORT = 3000
app.listen(PORT, ()=> console.log('servidor rodando na porta', PORT))