module.exports = app => {
  const { authJwt } = require("../middleware");
    const state = require("../controllers/state.controller.js");
  
    var router = require("express").Router();
  
    // Create a new state
    router.post("/", [authJwt.verifyToken], state.create);
  
    // Retrieve all states
    router.get("/", [authJwt.verifyToken], state.findAll);
  
    // Retrieve all active states
    router.get("/active", [authJwt.verifyToken], state.findAllPublished);
  
    // Retrieve a single state with id
    router.get("/:id", [authJwt.verifyToken], state.findOne);
  
    // Update a state with id
    router.put("/:id", [authJwt.verifyToken], state.update);
  
    // Delete a state with id
    router.delete("/:id", [authJwt.verifyToken], state.delete);
  
    // Delete all states
    //router.delete("/", [authJwt.verifyToken], state.deleteAll);
  
    app.use('/api/state', router);
  };