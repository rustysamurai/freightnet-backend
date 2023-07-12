module.exports = app => {
  const { authJwt } = require("../middleware");
    const contact = require("../controllers/contact.controller.js");
  
    var router = require("express").Router();
  
    // Create a new contact
    router.post("/", [authJwt.verifyToken], contact.create);
  
    // Retrieve all contacts
    router.get("/", [authJwt.verifyToken], contact.findAll);
  
    // Retrieve all active contacts
    router.get("/active", [authJwt.verifyToken], contact.findAllPublished);
  
    // Retrieve a single contact with id
    router.get("/:id", [authJwt.verifyToken], contact.findOne);
  
    // Update a contact with id
    router.put("/:id", [authJwt.verifyToken], contact.update);
  
    // Delete a contact with id
    router.delete("/:id", [authJwt.verifyToken], contact.delete);
  
    // Delete all contacts
    //router.delete("/", [authJwt.verifyToken], contact.deleteAll);
  
    app.use('/api/contact', router);
  };