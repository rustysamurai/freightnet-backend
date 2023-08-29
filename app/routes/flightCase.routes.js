module.exports = app => {
  const { authJwt } = require("../middleware");
    const flightCase = require("../controllers/flightCase.controller.js");
  
    var router = require("express").Router();
  
    // Create a new flightCase
    router.post("/",  flightCase.create);
  
    // Retrieve all flightCases
    router.get("/",  flightCase.findAll);
  
    // Retrieve all active flightCases
    router.get("/active",  flightCase.findAllPublished);
  
    // Retrieve a single flightCase with id
    router.get("/:id",  flightCase.findOne);
  
    // Update a flightCase with id
    router.put("/:id",  flightCase.update);
  
    // Delete a flightCase with id
    router.delete("/:id",  flightCase.delete);
  
    // Delete all flightCases
    //router.delete("/",  flightCase.deleteAll);
  
    app.use('/api/flightcase', router);
  };