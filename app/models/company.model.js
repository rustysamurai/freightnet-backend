module.exports = (sequelize, Sequelize) => {
    const Company = sequelize.define("company", {
        name: {
            type: Sequelize.STRING
        },
        trading_as: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        address_1: {
            type: Sequelize.STRING
        },
        address_2: {
            type: Sequelize.STRING
        },
        zipcode: {
            type: Sequelize.STRING
        },
        city: {
            type: Sequelize.STRING
        },
        phone_1: {
            type: Sequelize.STRING
        },
        phone_2: {
            type: Sequelize.STRING
        },
        website: {
            type: Sequelize.STRING
        },
        external_id: {
            type: Sequelize.STRING
        },
        active: {
            type: Sequelize.BOOLEAN
        }
    },{
        paranoid: true
    });

    return Company;
};
