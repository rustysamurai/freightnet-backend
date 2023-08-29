module.exports = app => {
  const { authJwt } = require("../middleware");
    const legType = require("../controllers/legType.controller.js");
  
    var router = require("express").Router();
  
    // Create a new legType
    router.post("/",  legType.create);
  
    // Retrieve all legTypes
    router.get("/",  legType.findAll);
  
    // Retrieve all active legTypes
    router.get("/active",  legType.findAllPublished);
  
    // Retrieve a single legType with id
    router.get("/:id",  legType.findOne);
  
    // Update a legType with id
    router.put("/:id",  legType.update);
  
    // Delete a legType with id
    router.delete("/:id",  legType.delete);
  
    // Delete all legTypes
    //router.delete("/",  legType.deleteAll);
  
    app.use('/api/legtype', router);
  };