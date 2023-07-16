module.exports = app => {
  const { authJwt } = require("../middleware");
    const quote = require("../controllers/quote.controller.js");
  
    var router = require("express").Router();
  
    // Create a new quote
    router.post("/",  quote.create);
  
    // Retrieve all quotes
    router.get("/",  quote.findAll);
  
    // Retrieve all active quotes
    router.get("/active",  quote.findAllPublished);
  
    // Retrieve a single quote with id
    router.get("/:id", quote.findOne);
  
    // Update a quote with id
    router.put("/:id",  quote.update);
  
    // Delete a quote with id
    router.delete("/:id",  quote.delete);
  
    // Delete all quotes
    //router.delete("/",  quote.deleteAll);
  
    app.use('/api/quote', router);
  };