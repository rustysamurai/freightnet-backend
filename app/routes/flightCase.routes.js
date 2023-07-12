module.exports = app => {
  const { authJwt } = require("../middleware");
    const flightCase = require("../controllers/flightCase.controller.js");
  
    var router = require("express").Router();
  
    // Create a new flightCase
    router.post("/", [authJwt.verifyToken], flightCase.create);
  
    // Retrieve all flightCases
    router.get("/", [authJwt.verifyToken], flightCase.findAll);
  
    // Retrieve all active flightCases
    router.get("/active", [authJwt.verifyToken], flightCase.findAllPublished);
  
    // Retrieve a single flightCase with id
    router.get("/:id", [authJwt.verifyToken], flightCase.findOne);
  
    // Update a flightCase with id
    router.put("/:id", [authJwt.verifyToken], flightCase.update);
  
    // Delete a flightCase with id
    router.delete("/:id", [authJwt.verifyToken], flightCase.delete);
  
    // Delete all flightCases
    //router.delete("/", [authJwt.verifyToken], flightCase.deleteAll);
  
    app.use('/api/flightCase', router);
  };