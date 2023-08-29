module.exports = (sequelize, Sequelize) => {
    const ShipmentLeg = sequelize.define("shipmentlegs", {
        origin: {
            type: Sequelize.STRING
        },
        destination: {
            type: Sequelize.STRING
        },
        distance:{
            type: Sequelize.INTEGER
        },
        active: {
            type: Sequelize.BOOLEAN
        }
    },{
        paranoid: true
    });
    return ShipmentLeg;
};
