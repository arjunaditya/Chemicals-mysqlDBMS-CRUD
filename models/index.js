
const Sequelize  = require('sequelize');

const sequelize = new Sequelize('ChemicalDB', 'root', 'Arjun@1999', {
    host: 'localhost',
    dialect: 'mysql'
});

try {
    sequelize.authenticate();
    console.log('connection has been established succesfully');
} catch (error) {
    console.error('Failed to create connections', error);
}
module.exports = sequelize;