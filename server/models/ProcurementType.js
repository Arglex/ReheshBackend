
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const ProcurementType = sequelize.define('ProcurementType', {
    type_id: {
        type: DataTypes.INTEGER
    },
    type: {
        type: DataTypes.STRING
    }
});