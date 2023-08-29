module.exports = app => {
  const { authJwt } = require("../middleware");
    const shipmentLeg = require("../controllers/shipmentLeg.controller.js");
  
    var router = require("express").Router();
  
    // Create a new shipmentLeg
    router.post("/",  shipmentLeg.create);
  
    // Retrieve all shipmentLegs
    router.get("/",  shipmentLeg.findAll);
  
    // Retrieve all active shipmentLegs
    router.get("/active",  shipmentLeg.findAllPublished);
  
    // Retrieve a single shipmentLeg with id
    router.get("/:id",  shipmentLeg.findOne);
  
    // Update a shipmentLeg with id
    router.put("/:id",  shipmentLeg.update);
  
    // Delete a shipmentLeg with id
    router.delete("/:id",  shipmentLeg.delete);
  
    // Delete all shipmentLegs
    //router.delete("/",  shipmentLeg.deleteAll);
  
    app.use('/api/shipmentleg', router);
  };