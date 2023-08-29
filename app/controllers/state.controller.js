const db = require("../models");
const State = db.states;
const Op = db.Sequelize.Op;

// Create and Save new
exports.create = (req, res) => {
// Validate request
    if (!req.body.state_full) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create
    const stateObj = {
        state_abbreviation: req.body.state_abbreviation,
        state_full: req.body.state_full,
        active: req.body.active ? req.body.active : false
    };

    // Save
    State.create(stateObj)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the State."
            });
        });
};

// Retrieve all
exports.findAll = (req, res) => {
    const state_full = req.query.name;
    let condition = state_full ? { state_full: { [Op.like]: `%${state_full}%` } } : null;

    State.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving states."
            });
        });
};

// Find with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    State.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find State with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving State with id=" + id
            });
        });
};

// Update by the id
exports.update = (req, res) => {
    const id = req.params.id;

    State.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "State was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update State with id=${id}. Maybe was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating State with id=" + id
            });
        });
};

// Delete with id
exports.delete = (req, res) => {
    const id = req.params.id;

    State.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "State was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete State with id=${id}. Maybe State was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete State with id=" + id
            });
        });
};

// Delete all
// exports.deleteAll = (req, res) => {
//
// };

// Find all active
exports.findAllPublished = (req, res) => {
    State.findAll({ where: { active: true } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving states."
            });
        });
};
