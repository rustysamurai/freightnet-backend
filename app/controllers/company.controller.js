const db = require("../models");
const Company = db.companies;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
// Validate request
    if (!req.body.name) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create
    const company = {
        name: req.body.name,
        trading_as: req.body.trading_as,
        email: req.body.email,
        address_1: req.body.address_1,
        address_2: req.body.address_2,
        city: req.body.city,
        zipcode: req.body.zipcode,
        country: req.body.country,
        phone_1: req.body.phone_1,
        phone_2: req.body.phone_2,
        website: req.body.website,
        external_id: req.body.external_id,
        active: req.body.active ? req.body.active : false
    };

    // Save
    Company.create(company)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Company."
            });
        });
};

// Retrieve all from the database.
exports.findAll = (req, res) => {
    const name = req.query.title;
    let condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

    Company.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving companies."
            });
        });
};

// Find a single with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Company.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Company with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Company with id=" + id
            });
        });
};

// Update by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Company.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Company was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Company with id=${id}. Maybe req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Company with id=" + id
            });
        });
};

// Delete with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Company.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Company was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Company with id=${id}. Maybe Company was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Company with id=" + id
            });
        });
};

// Delete all from the database.
// exports.deleteAll = (req, res) => {
//
// };

// Find all active
exports.findAllPublished = (req, res) => {
    Company.findAll({ where: { active: true } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving companies."
            });
        });
};
