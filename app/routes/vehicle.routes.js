module.exports = app => {
  const { authJwt } = require("../middleware");
    const vehicle = require("../controllers/vehicle.controller.js");
  
    var router = require("express").Router();
  
    // Create a new vehicle
    router.post("/",  vehicle.create);
  
    // Retrieve all vehicles
    router.get("/",  vehicle.findAll);
  
    // Retrieve all active vehicles
    router.get("/active",  vehicle.findAllPublished);
  
    // Retrieve a single vehicle with id
    router.get("/:id",  vehicle.findOne);
  
    // Update a vehicle with id
    router.put("/:id",  vehicle.update);
  
    // Delete a vehicle with id
    router.delete("/:id",  vehicle.delete);
  
    // Delete all vehicles
    //router.delete("/",  vehicle.deleteAll);
  
    app.use('/api/vehicle', router);
  };