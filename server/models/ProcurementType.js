
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

class ProcurementType extends Model {}
ProcurementType.init({
    type_id: {
        type: DataTypes.INTEGER
    },
    type: {
        type: DataTypes.STRING
    }
}, {modelName: "ProcurementType"});