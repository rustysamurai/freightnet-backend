module.exports = app => {
    const shipment = require("../controllers/shipment.controller.js");
  
    var router = require("express").Router();
  
    // Create a new shipment
    router.post("/", shipment.create);
  
    // Retrieve all shipments
    router.get("/", shipment.findAll);
  
    // Retrieve all published shipments
    router.get("/published", shipment.findAllPublished);
  
    // Retrieve a single shipment with id
    router.get("/:id", shipment.findOne);
  
    // Update a shipment with id
    router.put("/:id", shipment.update);
  
    // Delete a shipment with id
    router.delete("/:id", shipment.delete);
  
    // Delete all shipments
    //router.delete("/", shipment.deleteAll);
  
    app.use('/api/shipment', router);
  };