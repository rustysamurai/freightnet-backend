module.exports = app => {
  const { authJwt } = require("../middleware");
    const freightMethod = require("../controllers/freightMethod.controller.js");
  
    var router = require("express").Router();
  
    // Create a new freightMethod
    router.post("/", [authJwt.verifyToken], freightMethod.create);
  
    // Retrieve all freightMethods
    router.get("/", [authJwt.verifyToken], freightMethod.findAll);
  
    // Retrieve all active freightMethods
    router.get("/active", [authJwt.verifyToken], freightMethod.findAllPublished);
  
    // Retrieve a single freightMethod with id
    router.get("/:id", [authJwt.verifyToken], freightMethod.findOne);
  
    // Update a freightMethod with id
    router.put("/:id", [authJwt.verifyToken], freightMethod.update);
  
    // Delete a freightMethod with id
    router.delete("/:id", [authJwt.verifyToken], freightMethod.delete);
  
    // Delete all freightMethods
    //router.delete("/", [authJwt.verifyToken], freightMethod.deleteAll);
  
    app.use('/api/freightMethod', router);
  };