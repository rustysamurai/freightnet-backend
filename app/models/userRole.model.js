module.exports = (sequelize, Sequelize) => {
    const UserRole = sequelize.define("userrole", {
        role: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description: {
            type: Sequelize.STRING,
        },
        active: {
            type: Sequelize.BOOLEAN
        }
    },{
        paranoid: true
    });
    return UserRole;
};
