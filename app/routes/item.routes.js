module.exports = app => {
  const { authJwt } = require("../middleware");
    const item = require("../controllers/item.controller.js");
  
    var router = require("express").Router();
  
    // Create a new item
    router.post("/", [authJwt.verifyToken], item.create);
  
    // Retrieve all items
    router.get("/", [authJwt.verifyToken], item.findAll);
  
    // Retrieve all active items
    router.get("/active", [authJwt.verifyToken], item.findAllPublished);
  
    // Retrieve a single item with id
    router.get("/:id",[authJwt.verifyToken], item.findOne);
  
    // Update a item with id
    router.put("/:id", [authJwt.verifyToken], item.update);
  
    // Delete a item with id
    router.delete("/:id", [authJwt.verifyToken], item.delete);
  
    // Delete all items
    //router.delete("/", [authJwt.verifyToken], item.deleteAll);
  
    app.use('/api/item', router);
  };