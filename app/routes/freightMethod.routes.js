module.exports = app => {
    const freightMethod = require("../controllers/freightMethod.controller.js");
  
    var router = require("express").Router();
  
    // Create a new freightMethod
    router.post("/", freightMethod.create);
  
    // Retrieve all freightMethods
    router.get("/", freightMethod.findAll);
  
    // Retrieve all published freightMethods
    router.get("/published", freightMethod.findAllPublished);
  
    // Retrieve a single freightMethod with id
    router.get("/:id", freightMethod.findOne);
  
    // Update a freightMethod with id
    router.put("/:id", freightMethod.update);
  
    // Delete a freightMethod with id
    router.delete("/:id", freightMethod.delete);
  
    // Delete all freightMethods
    //router.delete("/", freightMethod.deleteAll);
  
    app.use('/api/freightMethod', router);
  };