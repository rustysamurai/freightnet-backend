const db = require("../models");
const Tour = db.tours;
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
    const tour = {
        name: req.body.name,
        description: req.body.description,
        start_date: req.body.start_date,
        end_date: req.body.end_date,
        active: req.body.active ? req.body.active : false
    };

    // Save
    Tour.create(tour)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tour."
            });
        });
};

// Retrieve all
exports.findAll = (req, res) => {
    const name = req.query.name;
    let condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

    Tour.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tours."
            });
        });
};

// Find with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Tour.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Tour with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Tour with id=" + id
            });
        });
};

// Update by the id
exports.update = (req, res) => {
    const id = req.params.id;

    Tour.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tour was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Tour with id=${id}. Maybe was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Tour with id=" + id
            });
        });
};

// Delete with id
exports.delete = (req, res) => {
    const id = req.params.id;

    Tour.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tour was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Tour with id=${id}. Maybe Tour was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Tour with id=" + id
            });
        });
};

// Delete all
// exports.deleteAll = (req, res) => {
//
// };

// Find all active
exports.findAllPublished = (req, res) => {
    Tour.findAll({ where: { active: true } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tours."
            });
        });
};
