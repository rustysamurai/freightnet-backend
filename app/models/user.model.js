module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        email: {
            type: Sequelize.STRING,
            allowNull: false
        },
        password:{
            type: Sequelize.STRING
        },
        job_description: {
            type: Sequelize.STRING
        },
        gender: {
            type: Sequelize.STRING
        },
        title: {
            type: Sequelize.STRING
        },
        first_name: {
            type: Sequelize.STRING
        },
        last_name: {
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
        drivers_license_number: {
            type: Sequelize.STRING
        },
        drivers_license_type: {
            type: Sequelize.STRING
        },
        drivers_license_state: {
            type: Sequelize.STRING
        },
        active: {
            type: Sequelize.BOOLEAN
        }
    },{
        paranoid: true
    });
    return User;
};
