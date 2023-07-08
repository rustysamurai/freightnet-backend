module.exports = (sequelize, Sequelize) => {
    const VehicleType = sequelize.define("vehicletype", {
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
    return VehicleType;
};
