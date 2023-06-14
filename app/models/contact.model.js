module.exports = (sequelize, Sequelize) => {
    const Contact = sequelize.define("contact", {
        title: {
            type: Sequelize.STRING
        },
        first_name: {
            type: Sequelize.STRING
        },
        last_name: {
            type: Sequelize.STRING
        },
        email_1: {
            type: Sequelize.STRING
        },
        email_2: {
            type: Sequelize.STRING
        },
        address_1: {
            type: Sequelize.STRING
        },
        address_2: {
            type: Sequelize.STRING
        },
        city: {
            type: Sequelize.STRING
        },
        zipcode: {
            type: Sequelize.STRING
        },
        phone_1: {
            type: Sequelize.STRING
        },
        phone_2: {
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

    return Contact;
};
