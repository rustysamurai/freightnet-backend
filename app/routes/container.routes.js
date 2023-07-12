module.exports = app => {
  const { authJwt } = require("../middleware");
    const container = require("../controllers/container.controller.js");
  
    var router = require("express").Router();
  
    // Create a new container
    router.post("/", [authJwt.verifyToken], container.create);
  
    // Retrieve all containers
    router.get("/", [authJwt.verifyToken], container.findAll);
  
    // Retrieve all active containers
    router.get("/active", [authJwt.verifyToken], container.findAllPublished);
  
    // Retrieve a single container with id
    router.get("/:id", [authJwt.verifyToken], container.findOne);
  
    // Update a container with id
    router.put("/:id", [authJwt.verifyToken], container.update);
  
    // Delete a container with id
    router.delete("/:id", [authJwt.verifyToken], container.delete);
  
    // Delete all containers
    //router.delete("/", [authJwt.verifyToken], container.deleteAll);
  
    app.use('/api/container', router);
  };