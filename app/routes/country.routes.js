module.exports = app => {
  const { authJwt } = require("../middleware");
    const country = require("../controllers/country.controller.js");
  
    var router = require("express").Router();
  
    // Create a new country
    router.post("/",  country.create);
  
    // Retrieve all countrys
    router.get("/",  country.findAll);
  
    // Retrieve all active countrys
    router.get("/active",  country.findAllPublished);
  
    // Retrieve a single country with id
    router.get("/:id",  country.findOne);
  
    // Update a country with id
    router.put("/:id",  country.update);
  
    // Delete a country with id
    router.delete("/:id",  country.delete);
  
    // Delete all countrys
    //router.delete("/",  country.deleteAll);
  
    app.use('/api/country', router);
  };