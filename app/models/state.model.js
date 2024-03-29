module.exports = (sequelize, Sequelize) => {
    const State = sequelize.define("state", {
        state_abbreviation: {
            type: Sequelize.STRING
        },
        state_full: {
            type: Sequelize.STRING
        },
        active: {
            type: Sequelize.BOOLEAN
        }
    },{
        paranoid: true
    });
    return State;
};
