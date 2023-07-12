module.exports = app => {
  const { authJwt } = require("../middleware");
    const vehicle = require("../controllers/vehicle.controller.js");
  
    var router = require("express").Router();
  
    // Create a new vehicle
    router.post("/", [authJwt.verifyToken], vehicle.create);
  
    // Retrieve all vehicles
    router.get("/", [authJwt.verifyToken], vehicle.findAll);
  
    // Retrieve all active vehicles
    router.get("/active", [authJwt.verifyToken], vehicle.findAllPublished);
  
    // Retrieve a single vehicle with id
    router.get("/:id", [authJwt.verifyToken], vehicle.findOne);
  
    // Update a vehicle with id
    router.put("/:id", [authJwt.verifyToken], vehicle.update);
  
    // Delete a vehicle with id
    router.delete("/:id", [authJwt.verifyToken], vehicle.delete);
  
    // Delete all vehicles
    //router.delete("/", [authJwt.verifyToken], vehicle.deleteAll);
  
    app.use('/api/vehicle', router);
  };