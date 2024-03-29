module.exports = (sequelize, Sequelize) => {
    const Country = sequelize.define("country", {
        name: {
            type: Sequelize.STRING
        },
        abbreviation: {
            type: Sequelize.STRING
        },
        active: {
            type: Sequelize.BOOLEAN
        }
    },{
        paranoid: true
    });
    return Country;
};
