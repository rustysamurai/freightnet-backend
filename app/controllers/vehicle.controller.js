const db = require("../models");
const Vehicle = db.vehicles;
const Op = db.Sequelize.Op;

// Create and Save new
exports.create = (req, res) => {
// Validate request
    if (!req.body.name) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create
    const vehicle = {
        name: req.body.name,
        year: req.body.year,
        make: req.body.make,
        model: req.body.model,
        trim: req.body.trim,
        metre_unit: req.body.metre_unit,
        fuel_volume_units: req.body.fuel_volume_units,
        vehicle_type: req.body.vehicle_type,
        group: req.body.group,
        vin: req.body.vin,
        colour: req.body.colour,
        license_plate: req.body.license_plate,
        purchase_vendor: req.body.purchase_vendor,
        purchase_date: req.body.purchase_date,
        purchase_price: req.body.purchase_price,
        warranty_expiration_date: req.body.warranty_expiration_date,
        fuel_type: req.body.fuel_type,
        registration_state: req.body.registration_state,
        ownership: req.body.ownership,
        body_type: req.body.body_type,
        body_subtype: req.body.body_subtype,
        drive_type: req.body.drive_type,
        brake_system: req.body.brake_system,
        fuel_tank_capacity: req.body.fuel_tank_capacity,
        max_payload: req.body.max_payload,
        base_towing_capacity: req.body.base_towing_capacity,
        max_payload: req.body.max_payload,
        bed_length: req.body.bed_length,
        height: req.body.height,
        heicurb_weightght: req.body.curb_weight,
        engine_cylinders: req.body.engine_cylinders,
        reserved_for: req.body.reserved_for,
        build_month: req.body.build_month,
        build_year: req.body.build_year,
        external_id: req.body.external_id,
        active: req.body.active ? req.body.active : false
    };

    // Save
    Vehicle.create(vehicle)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Vehicle."
            });
        });
};

// Retrieve all
exports.findAll = (req, res) => {
    const name = req.query.name;
    let condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

    Vehicle.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving vehicles."
            });
        });
};

// Find with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Vehicle.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Vehicle with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Vehicle with id=" + id
            });
        });
};

// Update by the id
exports.update = (req, res) => {
    const id = req.params.id;

    Vehicle.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Vehicle was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Vehicle with id=${id}. Maybe was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Vehicle with id=" + id
            });
        });
};

// Delete with id
exports.delete = (req, res) => {
    const id = req.params.id;

    Vehicle.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Vehicle was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Vehicle with id=${id}. Maybe Vehicle was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Vehicle with id=" + id
            });
        });
};

// Delete all
// exports.deleteAll = (req, res) => {
//
// };

// Find all active
exports.findAllPublished = (req, res) => {
    Vehicle.findAll({ where: { active: true } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving vehicles."
            });
        });
};
