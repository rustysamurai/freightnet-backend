module.exports = (sequelize, Sequelize) => {
    const Item = sequelize.define("item", {
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
        isFragile: {
            type: Sequelize.BOOLEAN
        },
        active: {
            type: Sequelize.BOOLEAN
        }
    },{
        paranoid: true
    });
    return Item;
};
