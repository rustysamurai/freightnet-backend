module.exports = app => {
    const vehicleType = require("../controllers/vehicleType.controller.js");
  
    var router = require("express").Router();
  
    // Create a new vehicleType
    router.post("/", vehicleType.create);
  
    // Retrieve all vehicleTypes
    router.get("/", vehicleType.findAll);
  
    // Retrieve all published vehicleTypes
    router.get("/published", vehicleType.findAllPublished);
  
    // Retrieve a single vehicleType with id
    router.get("/:id", vehicleType.findOne);
  
    // Update a vehicleType with id
    router.put("/:id", vehicleType.update);
  
    // Delete a vehicleType with id
    router.delete("/:id", vehicleType.delete);
  
    // Delete all vehicleTypes
    //router.delete("/", vehicleType.deleteAll);
  
    app.use('/api/vehicleType', router);
  };