module.exports = app => {
  const { authJwt } = require("../middleware");
    const freightType = require("../controllers/freightType.controller.js");
  
    var router = require("express").Router();
  
    // Create a new freightType
    router.post("/", [authJwt.verifyToken], freightType.create);
  
    // Retrieve all freightTypes
    router.get("/", [authJwt.verifyToken], freightType.findAll);
  
    // Retrieve all active freightTypes
    router.get("/active", [authJwt.verifyToken], freightType.findAllPublished);
  
    // Retrieve a single freightType with id
    router.get("/:id", [authJwt.verifyToken], freightType.findOne);
  
    // Update a freightType with id
    router.put("/:id", [authJwt.verifyToken], freightType.update);
  
    // Delete a freightType with id
    router.delete("/:id", [authJwt.verifyToken], freightType.delete);
  
    // Delete all freightTypes
    //router.delete("/", [authJwt.verifyToken], freightType.deleteAll);
  
    app.use('/api/freightType', router);
  };