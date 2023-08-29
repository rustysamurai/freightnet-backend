const db = require("../models");
const ShipmentLeg = db.shipmentlegs;
const Op = db.Sequelize.Op;

// Create and Save new
exports.create = (req, res) => {
// Validate request
    if (!req.body.origin) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create
    const shipmentleg = {
        origin: req.body.origin,
        destination: req.body.destination,
        distance: req.body.distance,
        active: req.body.active ? req.body.active : false
    };

    // Save
    ShipmentLeg.create(shipmentleg)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Shipment Leg."
            });
        });
};

// Retrieve all
exports.findAll = (req, res) => {
    const origin = req.query.origin;
    let condition = origin ? { origin: { [Op.like]: `%${origin}%` } } : null;

    ShipmentLeg.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving shipment legs."
            });
        });
};

// Find with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    ShipmentLeg.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Shipment Leg with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Shipment Leg with id=" + id
            });
        });
};

// Update by the id
exports.update = (req, res) => {
    const id = req.params.id;

    ShipmentLeg.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Shipment Leg was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Shipment Leg with id=${id}. Maybe was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Shipment Leg with id=" + id
            });
        });
};

// Delete with id
exports.delete = (req, res) => {
    const id = req.params.id;

    ShipmentLeg.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Shipment Leg was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Shipment Leg with id=${id}. Maybe Shipment Leg was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Shipment Leg with id=" + id
            });
        });
};

// Delete all
// exports.deleteAll = (req, res) => {
//
// };

// Find all active
exports.findAllPublished = (req, res) => {
    ShipmentLeg.findAll({ where: { active: true } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving shipment legs."
            });
        });
};
