
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

class PakaType extends Model {}
PakaType.init({
    id: {
        type: DataTypes.INTEGER
    },
    type: {
        type: DataTypes.STRING
    }
}, {modelName: "PakaType"});