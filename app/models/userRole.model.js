module.exports = (sequelize, Sequelize) => {
    const UserRole = sequelize.define("userrole", {
        role: {
            type: Sequelize.STRING,
            allowNull: false
        },
        active: {
            type: Sequelize.BOOLEAN
        }
    },{
        paranoid: true
    });
    return UserRole;
};
