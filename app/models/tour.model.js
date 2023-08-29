module.exports = (sequelize, Sequelize) => {
    const Tour = sequelize.define("tour", {
        name: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        start_date: {
            type: Sequelize.DATE
        },
        end_date: {
            type: Sequelize.DATE
        },
        active: {
            type: Sequelize.BOOLEAN
        }
    },{
        paranoid: true
    });
    return Tour;
};
