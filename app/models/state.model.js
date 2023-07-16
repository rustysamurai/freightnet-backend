module.exports = (sequelize, Sequelize) => {
    const State = sequelize.define("state", {
        state_abbreviation: {
            type: Sequelize.STRING
        },
        state: {
            type: Sequelize.BOOLEAN
        },
        active: {
            type: Sequelize.BOOLEAN
        }
    },{
        paranoid: true
    });
    return State;
};
