module.exports = (sequelize, Sequelize) => {
    const LegType = sequelize.define("legtype", {
        name: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        active: {
            type: Sequelize.BOOLEAN
        }
    },{
        paranoid: true
    });
    return LegType;
};
