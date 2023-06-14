module.exports = (sequelize, Sequelize) => {
    const Shipment = sequelize.define("shipment", {
        name: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        notes: {
            type: Sequelize.STRING
        },
        origin_address_1: {
            type: Sequelize.STRING
        },
        origin_address_2: {
            type: Sequelize.STRING
        },
        origin_city: {
            type: Sequelize.STRING
        },
        origin_state: {
            type: Sequelize.STRING
        },
        origin_country: {
            type: Sequelize.STRING
        },
        origin_iata: {
            type: Sequelize.STRING
        },
        destination_address_1: {
            type: Sequelize.STRING
        },
        destination_address_2: {
            type: Sequelize.STRING
        },
        destination_city: {
            type: Sequelize.STRING
        },
        destination_state: {
            type: Sequelize.STRING
        },
        destination_country: {
            type: Sequelize.STRING
        },
        destination_iata: {
            type: Sequelize.STRING
        },
        departure_date: {
            type: Sequelize.DATE
        },
        est_arrival_date: {
            type: Sequelize.DATE
        },
        active: {
            type: Sequelize.BOOLEAN
        }
    },{
        paranoid: true
    });
    return Shipment;
};
