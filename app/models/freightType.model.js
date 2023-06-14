module.exports = (sequelize, Sequelize) => {
    const FreightType = sequelize.define("freighttype", {
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
    return FreightType;
};
