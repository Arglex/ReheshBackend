
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const Files = sequelize.define('Files', {
    id: {
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING
    },
    main_request: {
        type: DataTypes.INTEGER
    },
    secondary_request: {
        type: DataTypes.INTEGER
    },
    bd_id: {
        type: DataTypes.INTEGER
    }
});