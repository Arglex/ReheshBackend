
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

class Status extends Model {}
Status.init({
    type_id: {
        type: DataTypes.INTEGER
    },
    status: {
        type: DataTypes.STRING
    }
}, {modelName: "Status"});