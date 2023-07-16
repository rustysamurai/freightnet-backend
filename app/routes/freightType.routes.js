module.exports = app => {
  const { authJwt } = require("../middleware");
    const freightType = require("../controllers/freightType.controller.js");
  
    var router = require("express").Router();
  
    // Create a new freightType
    router.post("/",  freightType.create);
  
    // Retrieve all freightTypes
    router.get("/",  freightType.findAll);
  
    // Retrieve all active freightTypes
    router.get("/active",  freightType.findAllPublished);
  
    // Retrieve a single freightType with id
    router.get("/:id",  freightType.findOne);
  
    // Update a freightType with id
    router.put("/:id",  freightType.update);
  
    // Delete a freightType with id
    router.delete("/:id",  freightType.delete);
  
    // Delete all freightTypes
    //router.delete("/",  freightType.deleteAll);
  
    app.use('/api/freightType', router);
  };