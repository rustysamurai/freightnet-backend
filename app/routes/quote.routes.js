module.exports = app => {
  const { authJwt } = require("../middleware");
    const quote = require("../controllers/quote.controller.js");
  
    var router = require("express").Router();
  
    // Create a new quote
    router.post("/", [authJwt.verifyToken], quote.create);
  
    // Retrieve all quotes
    router.get("/", [authJwt.verifyToken], quote.findAll);
  
    // Retrieve all active quotes
    router.get("/active", [authJwt.verifyToken], quote.findAllPublished);
  
    // Retrieve a single quote with id
    router.get("/:id",[authJwt.verifyToken], quote.findOne);
  
    // Update a quote with id
    router.put("/:id", [authJwt.verifyToken], quote.update);
  
    // Delete a quote with id
    router.delete("/:id", [authJwt.verifyToken], quote.delete);
  
    // Delete all quotes
    //router.delete("/", [authJwt.verifyToken], quote.deleteAll);
  
    app.use('/api/quote', router);
  };