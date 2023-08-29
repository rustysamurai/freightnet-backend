const db = require("../models");
const VehicleType = db.vehicletypes;
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
    const vehicletype = {
        name: req.body.name,
        description: req.body.description,
        active: req.body.active ? req.body.active : false
    };

    // Save
    VehicleType.create(vehicletype)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Vehicle type."
            });
        });
};

// Retrieve all
exports.findAll = (req, res) => {
    const name = req.query.name;
    let condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

    VehicleType.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving vehicle types."
            });
        });
};

// Find with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    VehicleType.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Vehicletype with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Vehicletype with id=" + id
            });
        });
};

// Update by the id
exports.update = (req, res) => {
    const id = req.params.id;

    VehicleType.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Vehicletype was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Vehicletype with id=${id}. Maybe was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Vehicletype with id=" + id
            });
        });
};

// Delete with id
exports.delete = (req, res) => {
    const id = req.params.id;

    VehicleType.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Vehicletype was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Vehicletype with id=${id}. Maybe Vehicletype was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Vehicletype with id=" + id
            });
        });
};

// Delete all
// exports.deleteAll = (req, res) => {
//
// };

// Find all active
exports.findAllPublished = (req, res) => {
    VehicleType.findAll({ where: { active: true } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving vehicletypes."
            });
        });
};
