const db = require("../models");
const Shipment = db.shipments;
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
    const shipment = {
        name: req.body.name,
        description: req.body.description,
        notes: req.body.notes,
        origin_address_1: req.body.origin_address_1,
        origin_address_2: req.body.origin_address_2,
        origin_city: req.body.origin_city,
        origin_state: req.body.origin_state,
        origin_country: req.body.origin_country,
        origin_iata: req.body.origin_iata,
        destination_address_1: req.body.destination_address_1,
        destination_address_2: req.body.destination_address_2,
        destination_city: req.body.destination_city,
        destination_state: req.body.destination_state,
        destination_country: req.destination_country,
        destination_iata: req.body.destination_iata,
        departure_date: req.body.departure_date,
        est_arrival_date: req.body.est_arrival_date,
        active: req.body.active ? req.body.active : false
    };

    // Save
    Shipment.create(shipment)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Shipment."
            });
        });
};

// Retrieve all
exports.findAll = (req, res) => {
    const name = req.query.name;
    let condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

    Shipment.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving shipments."
            });
        });
};

// Find with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Shipment.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Shipment with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Shipment with id=" + id
            });
        });
};

// Update by the id
exports.update = (req, res) => {
    const id = req.params.id;

    Shipment.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Shipment was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Shipment with id=${id}. Maybe was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Shipment with id=" + id
            });
        });
};

// Delete with id
exports.delete = (req, res) => {
    const id = req.params.id;

    Shipment.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Shipment was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Shipment with id=${id}. Maybe Shipment was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Shipment with id=" + id
            });
        });
};

// Delete all
// exports.deleteAll = (req, res) => {
//
// };

// Find all active
exports.findAllPublished = (req, res) => {
    Shipment.findAll({ where: { active: true } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving shipments."
            });
        });
};
