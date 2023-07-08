module.exports = (sequelize, Sequelize) => {
    const Container = sequelize.define("container", {
        name: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        weight: {
            type: Sequelize.FLOAT
        },
        height: {
            type: Sequelize.FLOAT
        },
        width: {
            type: Sequelize.FLOAT
        },
        length: {
            type: Sequelize.FLOAT
        },
        qty: {
            type: Sequelize.INTEGER
        },
        active: {
            type: Sequelize.BOOLEAN
        }
    },{
        paranoid: true
    });
    return Container;
};
