module.exports = app => {
    const item = require("../controllers/item.controller.js");
  
    var router = require("express").Router();
  
    // Create a new item
    router.post("/", item.create);
  
    // Retrieve all items
    router.get("/", item.findAll);
  
    // Retrieve all published items
    router.get("/published", item.findAllPublished);
  
    // Retrieve a single item with id
    router.get("/:id", item.findOne);
  
    // Update a item with id
    router.put("/:id", item.update);
  
    // Delete a item with id
    router.delete("/:id", item.delete);
  
    // Delete all items
    //router.delete("/", item.deleteAll);
  
    app.use('/api/item', router);
  };