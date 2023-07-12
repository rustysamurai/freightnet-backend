module.exports = app => {
  const { authJwt } = require("../middleware");
    const legType = require("../controllers/legType.controller.js");
  
    var router = require("express").Router();
  
    // Create a new legType
    router.post("/", [authJwt.verifyToken], legType.create);
  
    // Retrieve all legTypes
    router.get("/", [authJwt.verifyToken], legType.findAll);
  
    // Retrieve all active legTypes
    router.get("/active", [authJwt.verifyToken], legType.findAllPublished);
  
    // Retrieve a single legType with id
    router.get("/:id", [authJwt.verifyToken], legType.findOne);
  
    // Update a legType with id
    router.put("/:id", [authJwt.verifyToken], legType.update);
  
    // Delete a legType with id
    router.delete("/:id", [authJwt.verifyToken], legType.delete);
  
    // Delete all legTypes
    //router.delete("/", [authJwt.verifyToken], legType.deleteAll);
  
    app.use('/api/legType', router);
  };