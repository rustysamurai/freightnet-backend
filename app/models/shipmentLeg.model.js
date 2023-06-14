module.exports = (sequelize, Sequelize) => {
    const ShipmentLeg = sequelize.define("shipmentlegs", {
        name: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        active: {
            type: Sequelize.BOOLEAN
        }
    },{
        paranoid: true
    });
    return ShipmentLeg;
};
