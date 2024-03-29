const db = require("../models");
const Contact = db.contacts;
const Op = db.Sequelize.Op;

// Create and Save new
exports.create = (req, res) => {
// Validate request
    if (!req.body.title) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create
    const contact = {
        title: req.body.title,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email_1: req.body.email_1,
        email_2: req.body.email_2,
        address_1: req.body.address_1,
        address_2: req.body.address_2,
        city: req.body.city,
        zipcode: req.body.zipcode,
        country: req.body.country,
        phone_1: req.body.phone_1,
        phone_2: req.body.phone_2,
        external_id: req.body.external_id,
        active: req.body.active ? req.body.active : false
    };

    // Save
    Contact.create(contact)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Contact."
            });
        });
};

// Retrieve all
exports.findAll = (req, res) => {
    const name = req.query.name;
    let condition = name ? { titnamele: { [Op.like]: `%${name}%` } } : null;

    Contact.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving contacts."
            });
        });
};

// Find with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Contact.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Contact with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Contact with id=" + id
            });
        });
};

// Update by the id
exports.update = (req, res) => {
    const id = req.params.id;

    Contact.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Contact was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Contact with id=${id}. Maybe was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Contact with id=" + id
            });
        });
};

// Delete with id
exports.delete = (req, res) => {
    const id = req.params.id;

    Contact.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Contact was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Contact with id=${id}. Maybe Contact was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Contact with id=" + id
            });
        });
};

// Delete all
// exports.deleteAll = (req, res) => {
//
// };

// Find all active
exports.findAllPublished = (req, res) => {
    Contact.findAll({ where: { active: true } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving contacts."
            });
        });
};
