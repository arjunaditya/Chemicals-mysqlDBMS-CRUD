const express  = require('express');
const bodyParser = require ("body-parser");
const table = require('./models/chemModel');

const controller = require('./src/app/service/controller')

const app = express();
const port = 3000;

table.sync()
app.use(bodyParser.json())

app.get('/', function(req, res){
    res.send('hello');
}) 
app.get('/chemicals', controller.getAll) 
app.get('/chemicals/:id', controller.getChemical)
app.post('/add', controller.create) 
app.delete('/delete/:id', controller.deleteChemical)
app.patch('/update/:id', controller.updateChemical)

app.listen(3000, () => {
    console.log('Server up and Running!')
})