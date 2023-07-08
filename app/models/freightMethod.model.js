module.exports = (sequelize, Sequelize) => {
    //e.g. air, sea, road
    const FreightMethod = sequelize.define("freightmethod", {
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
    return FreightMethod;
};
