module.exports = (sequelize, Sequelize) => {
    const Country = sequelize.define("country", {
        country_abbreviation: {
            type: Sequelize.STRING
        },
        country: {
            type: Sequelize.BOOLEAN
        }
    },{
        paranoid: true
    });
    return Country;
};
