module.exports = app => {
  const { authJwt } = require("../middleware");
    const shipment = require("../controllers/shipment.controller.js");
  
    var router = require("express").Router();
  
    // Create a new shipment
    router.post("/", [authJwt.verifyToken], shipment.create);
  
    // Retrieve all shipments
    router.get("/", [authJwt.verifyToken], shipment.findAll);
  
    // Retrieve all active shipments
    router.get("/active", [authJwt.verifyToken], shipment.findAllPublished);
  
    // Retrieve a single shipment with id
    router.get("/:id", [authJwt.verifyToken], shipment.findOne);
  
    // Update a shipment with id
    router.put("/:id", [authJwt.verifyToken], shipment.update);
  
    // Delete a shipment with id
    router.delete("/:id", [authJwt.verifyToken], shipment.delete);
  
    // Delete all shipments
    //router.delete("/", [authJwt.verifyToken], shipment.deleteAll);
  
    app.use('/api/shipment', router);
  };