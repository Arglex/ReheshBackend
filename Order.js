
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const Order = sequelize.define('Order', {
    id: {
        type: DataTypes.INTEGER
    },
    bim_commander: {
        type: DataTypes.INTEGER
    },
    proffessional_at1: {
        type: DataTypes.INTEGER
    },
    proffessional_at2: {
        type: DataTypes.INTEGER
    },
    Mn_Order: {
        type: DataTypes.INTEGER
    },
    document_created: {
        type: DataTypes.BOOLEAN
    },
    status: {
        type: DataTypes.INTEGER
    },
    bd: {
        type: DataTypes.INTEGER
    },
    erp_order: {
        type: DataTypes.STRING(12)
    },
    erp_req: {
        type: DataTypes.STRING(6)
    },
    invc: {
        type: DataTypes.INTEGER
    },
    order_type: {
        type: DataTypes.INTEGER
    },
    procurement_type: {
        type: DataTypes.INTEGER
    },
    pulling_bag: {
        type: DataTypes.INTEGER
    },
    need: {
        type: DataTypes.STRING
    },
    paka: {
        type: DataTypes.INTEGER
    },
    budget: {
        type: DataTypes.INTEGER
    },
    schedule: {
        type: DataTypes.DATEONLY
    },
    assignment_id: {
        type: DataTypes.INTEGER
    },
    start_date: {
        type: DataTypes.DATEONLY
    },
    invitor: {
        type: DataTypes.INTEGER
    },
    is_invitor: {
        type: DataTypes.BOOLEAN
    },
    is_cmdr: {
        type: DataTypes.BOOLEAN
    },

});