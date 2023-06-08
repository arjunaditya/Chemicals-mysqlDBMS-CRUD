const express  = require('express');
const bodyParser = require ("body-parser");
// require('./models/index')
const table = require('./models/chemModel')

const app = express();
const port = 3000;

table.sync()
app.use(bodyParser.json())


app.listen(3000, () => {
    console.log('some log')
})