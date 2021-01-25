
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const BaseHierarchy = sequelize.define('BaseHierarchy', {
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
});