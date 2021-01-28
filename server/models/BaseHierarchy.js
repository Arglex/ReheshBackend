
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

class BaseHierarchy extends Model {}
BaseHierarchy.init({
    bim_id: {
        type: DataTypes.INTEGER
    },
    department_id: {
        type: DataTypes.INTEGER
    },
    bim_name: {
        type: DataTypes.STRING
    },
    department_name: {
        type: DataTypes.STRING
    }
}, {modelName: "BaseHierarchy"});