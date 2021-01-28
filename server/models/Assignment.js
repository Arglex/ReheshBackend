
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

class Assignment extends Model {}
Assignment.init({ 
    id: {
        type: DataTypes.INTEGER
    },
    assignment_num: {
        type: DataTypes.STRING
    }
}, {modelName: "Assignment"});