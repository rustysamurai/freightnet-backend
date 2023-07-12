module.exports = app => {
    const { authJwt } = require("../middleware");
    const company = require("../controllers/company.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Company
    router.post("/", [authJwt.verifyToken], company.create);
  
    // Retrieve all Companies
    router.get("/", [authJwt.verifyToken], company.findAll);
  
    // Retrieve all active Companies
    router.get("/active",[authJwt.verifyToken], company.findAllPublished);
  
    // Retrieve a single Company with id
    router.get("/:id",[authJwt.verifyToken], company.findOne);
  
    // Update a Company with id
    router.put("/:id",[authJwt.verifyToken], company.update);
  
    // Delete a Company with id
    router.delete("/:id",[authJwt.verifyToken], company.delete);
  
    // Delete all Companys
    //router.delete("/", [authJwt.verifyToken], companies.deleteAll);
  
    app.use('/api/company', router);
  };