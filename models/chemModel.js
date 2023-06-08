const { DataTypes } = require('sequelize');
const   sequelize  =  require('./index');

const Model = sequelize.define('ChemicalTable', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    attribution: {
        type: DataTypes.STRING,
    },
    modified: {
        type: DataTypes.DATE
    }

})
module.exports=Model;
