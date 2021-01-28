
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

class Provider extends Model {}
Provider.init({
    id: {
        type: DataTypes.INTEGER
    },
    provider_name: {
        type: DataTypes.STRING
    }
}, {modelName: "Provider"});