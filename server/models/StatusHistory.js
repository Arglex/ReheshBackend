
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

class StatusHistory extends Model {}
StatusHistory.init({
    history_id: {
        type: DataTypes.INTEGER
    },
    comments: {
        type: DataTypes.STRING
    },
    status: {
        type: DataTypes.INTEGER
    },
    order: {
        type: DataTypes.INTEGER
    },
    part: {
        type: DataTypes.INTEGER
    },
    field_index: {
        type: DataTypes.INTEGER
    },
    new_value: {
        type: DataTypes.STRING
    },
    old_value: {
        type: DataTypes.DATEONLY
    }
}, {modelName: "StatusHistory"});