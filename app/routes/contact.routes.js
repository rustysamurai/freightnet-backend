module.exports = app => {
  const { authJwt } = require("../middleware");
    const contact = require("../controllers/contact.controller.js");
  
    var router = require("express").Router();
  
    // Create a new contact
    router.post("/",  contact.create);
  
    // Retrieve all contacts
    router.get("/",  contact.findAll);
  
    // Retrieve all active contacts
    router.get("/active",  contact.findAllPublished);
  
    // Retrieve a single contact with id
    router.get("/:id",  contact.findOne);
  
    // Update a contact with id
    router.put("/:id",  contact.update);
  
    // Delete a contact with id
    router.delete("/:id",  contact.delete);
  
    // Delete all contacts
    //router.delete("/",  contact.deleteAll);
  
    app.use('/api/contact', router);
  };