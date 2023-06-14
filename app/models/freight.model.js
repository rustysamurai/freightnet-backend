module.exports = (sequelize, Sequelize) => {
    const Freight = sequelize.define("freights", {
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
    return Freight;
};
