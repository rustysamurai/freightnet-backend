module.exports = app => {
  const { authJwt } = require("../middleware");
    const tour = require("../controllers/tour.controller.js");
  
    var router = require("express").Router();
  
    // Create a new tour
    router.post("/",  tour.create);
  
    // Retrieve all tours
    router.get("/",  tour.findAll);
  
    // Retrieve all active tours
    router.get("/active",  tour.findAllPublished);
  
    // Retrieve a single tour with id
    router.get("/:id",  tour.findOne);
  
    // Update a tour with id
    router.put("/:id",  tour.update);
  
    // Delete a tour with id
    router.delete("/:id",  tour.delete);
  
    // Delete all tours
    //router.delete("/",  tour.deleteAll);
  
    app.use('/api/tour', router);
  };