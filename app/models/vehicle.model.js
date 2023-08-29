module.exports = (sequelize, Sequelize) => {
    const Vehicle = sequelize.define("vehicle", {
        name: {
            type: Sequelize.STRING
        },
        year: {
            type: Sequelize.STRING
        },
        make: {
            type: Sequelize.STRING
        },
        model: {
            type: Sequelize.STRING
        },
        trim: {
            type: Sequelize.STRING
        },
        vin: {
            type: Sequelize.STRING
        },
        colour: {
            type: Sequelize.STRING
        },
        license_plate: {
            type: Sequelize.STRING
        },
        warranty_expiration_date: {
            type: Sequelize.DATE
        },
        rego_expiration_date: {
            type: Sequelize.DATE
        },
        fuel_type: {
            type: Sequelize.STRING
        },
        registration_state: {
            type: Sequelize.STRING
        },
        ownership_type: {
            type: Sequelize.STRING
        },
        body_type: {
            type: Sequelize.STRING
        },
        body_subtype: {
            type: Sequelize.STRING
        },
        drive_type: {
            type: Sequelize.STRING
        },
        brake_system: {
            type: Sequelize.STRING
        },
        fuel_tank_capacity: {
            type: Sequelize.STRING
        },
        max_payload:{
            type: Sequelize.STRING
        },
        base_towing_capacity:{
            type: Sequelize.STRING
        },
        bed_length:{
            type: Sequelize.STRING
        },
        height:{
            type: Sequelize.STRING
        },
        curb_weight:{
            type: Sequelize.STRING
        },
        engine_cylinders:{
            type: Sequelize.STRING
        },
        build_month:{
            type: Sequelize.STRING
        },
        build_year:{
            type: Sequelize.STRING
        },
        external_id: {
            type: Sequelize.STRING
        },
        on_road:{
            type: Sequelize.BOOLEAN
        },
        active: {
            type: Sequelize.BOOLEAN
        }
    },{
        paranoid: true
    });
    return Vehicle;
};
