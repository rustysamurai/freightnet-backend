module.exports = app => {
    const company = require("../controllers/company.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Company
    router.post("/", company.create);
  
    // Retrieve all Companies
    router.get("/", company.findAll);
  
    // Retrieve all published Companies
    router.get("/published", company.findAllPublished);
  
    // Retrieve a single Company with id
    router.get("/:id", company.findOne);
  
    // Update a Company with id
    router.put("/:id", company.update);
  
    // Delete a Company with id
    router.delete("/:id", company.delete);
  
    // Delete all Companys
    //router.delete("/", companies.deleteAll);
  
    app.use('/api/company', router);
  };