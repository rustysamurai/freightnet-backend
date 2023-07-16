module.exports = app => {
  const { authJwt } = require("../middleware");
    const state = require("../controllers/state.controller.js");
  
    var router = require("express").Router();
  
    // Create a new state
    router.post("/",  state.create);
  
    // Retrieve all states
    router.get("/",  state.findAll);
  
    // Retrieve all active states
    router.get("/active",  state.findAllPublished);
  
    // Retrieve a single state with id
    router.get("/:id",  state.findOne);
  
    // Update a state with id
    router.put("/:id",  state.update);
  
    // Delete a state with id
    router.delete("/:id",  state.delete);
  
    // Delete all states
    //router.delete("/",  state.deleteAll);
  
    app.use('/api/state', router);
  };