
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

class Paka extends Model {}
Paka.init({
    paka: {
        type: DataTypes.INTEGER
    },
    paka_team: {
        type: DataTypes.STRING
    },
    priority: {
        type: DataTypes.INTEGER
    },
    deadline: {
        type: DataTypes.DATEONLY
    },
    paka_type: {
        type: DataTypes.INTEGER
    },
}, {modelName: "Paka"});