module.exports = app => {
  const { authJwt } = require("../middleware");
    const tour = require("../controllers/tour.controller.js");
  
    var router = require("express").Router();
  
    // Create a new tour
    router.post("/", [authJwt.verifyToken], tour.create);
  
    // Retrieve all tours
    router.get("/",[authJwt.verifyToken],  tour.findAll);
  
    // Retrieve all active tours
    router.get("/active", [authJwt.verifyToken], tour.findAllPublished);
  
    // Retrieve a single tour with id
    router.get("/:id", [authJwt.verifyToken], tour.findOne);
  
    // Update a tour with id
    router.put("/:id", [authJwt.verifyToken], tour.update);
  
    // Delete a tour with id
    router.delete("/:id", [authJwt.verifyToken], tour.delete);
  
    // Delete all tours
    //router.delete("/", [authJwt.verifyToken], tour.deleteAll);
  
    app.use('/api/tour', router);
  };