module.exports = (sequelize, Sequelize) => {
    const Tour = sequelize.define("tour", {
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
    return Tour;
};
