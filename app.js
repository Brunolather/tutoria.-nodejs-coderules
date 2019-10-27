const express = require('express')
const bodyParser = require('body-parser')
const ejs = require('ejs')

const app = express()

let publicDir = require('path').join(__dirname,'/public');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(publicDir))
app.set('view engine', 'ejs');

app.get('/', (req, res)=> {
    res.render('index')
})

const PORT = 3000
app.listen(PORT, ()=> console.log('servidor rodando na porta', PORT))