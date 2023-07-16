module.exports = app => {
  const { authJwt } = require("../middleware");
    const container = require("../controllers/container.controller.js");
  
    var router = require("express").Router();
  
    // Create a new container
    router.post("/",  container.create);
  
    // Retrieve all containers
    router.get("/",  container.findAll);
  
    // Retrieve all active containers
    router.get("/active",  container.findAllPublished);
  
    // Retrieve a single container with id
    router.get("/:id",  container.findOne);
  
    // Update a container with id
    router.put("/:id",  container.update);
  
    // Delete a container with id
    router.delete("/:id",  container.delete);
  
    // Delete all containers
    //router.delete("/",  container.deleteAll);
  
    app.use('/api/container', router);
  };