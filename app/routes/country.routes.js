module.exports = app => {
  const { authJwt } = require("../middleware");
    const country = require("../controllers/country.controller.js");
  
    var router = require("express").Router();
  
    // Create a new country
    router.post("/", [authJwt.verifyToken], country.create);
  
    // Retrieve all countrys
    router.get("/", [authJwt.verifyToken], country.findAll);
  
    // Retrieve all active countrys
    router.get("/active", [authJwt.verifyToken], country.findAllPublished);
  
    // Retrieve a single country with id
    router.get("/:id", [authJwt.verifyToken], country.findOne);
  
    // Update a country with id
    router.put("/:id", [authJwt.verifyToken], country.update);
  
    // Delete a country with id
    router.delete("/:id", [authJwt.verifyToken], country.delete);
  
    // Delete all countrys
    //router.delete("/", [authJwt.verifyToken], country.deleteAll);
  
    app.use('/api/country', router);
  };