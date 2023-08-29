module.exports = (sequelize, Sequelize) => {
    const Quote = sequelize.define("quote", {
        name: {
            type: Sequelize.STRING
        },
        status:{
            type: Sequelize.STRING
        },
        active: {
            type: Sequelize.BOOLEAN
        }
    },{
        paranoid: true
    });
    return Quote;
};
