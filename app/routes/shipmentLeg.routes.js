module.exports = app => {
  const { authJwt } = require("../middleware");
    const shipmentLeg = require("../controllers/shipmentLeg.controller.js");
  
    var router = require("express").Router();
  
    // Create a new shipmentLeg
    router.post("/", [authJwt.verifyToken], shipmentLeg.create);
  
    // Retrieve all shipmentLegs
    router.get("/", [authJwt.verifyToken], shipmentLeg.findAll);
  
    // Retrieve all active shipmentLegs
    router.get("/active", [authJwt.verifyToken], shipmentLeg.findAllPublished);
  
    // Retrieve a single shipmentLeg with id
    router.get("/:id", [authJwt.verifyToken], shipmentLeg.findOne);
  
    // Update a shipmentLeg with id
    router.put("/:id", [authJwt.verifyToken], shipmentLeg.update);
  
    // Delete a shipmentLeg with id
    router.delete("/:id", [authJwt.verifyToken], shipmentLeg.delete);
  
    // Delete all shipmentLegs
    //router.delete("/", [authJwt.verifyToken], shipmentLeg.deleteAll);
  
    app.use('/api/shipmentLeg', router);
  };