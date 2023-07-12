module.exports = app => {
  const { authJwt } = require("../middleware");
    const vehicleType = require("../controllers/vehicleType.controller.js");
  
    var router = require("express").Router();
  
    // Create a new vehicleType
    router.post("/", [authJwt.verifyToken], vehicleType.create);
  
    // Retrieve all vehicleTypes
    router.get("/", [authJwt.verifyToken], vehicleType.findAll);
  
    // Retrieve all active vehicleTypes
    router.get("/active", [authJwt.verifyToken], vehicleType.findAllPublished);
  
    // Retrieve a single vehicleType with id
    router.get("/:id", [authJwt.verifyToken], vehicleType.findOne);
  
    // Update a vehicleType with id
    router.put("/:id", [authJwt.verifyToken], vehicleType.update);
  
    // Delete a vehicleType with id
    router.delete("/:id", [authJwt.verifyToken], vehicleType.delete);
  
    // Delete all vehicleTypes
    //router.delete("/", [authJwt.verifyToken], vehicleType.deleteAll);
  
    app.use('/api/vehicleType', router);
  };