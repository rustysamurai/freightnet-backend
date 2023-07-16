module.exports = app => {
  const { authJwt } = require("../middleware");
    const pallet = require("../controllers/pallet.controller.js");
  
    var router = require("express").Router();
  
    // Create a new pallet
    router.post("/",  pallet.create);
  
    // Retrieve all pallets
    router.get("/",  pallet.findAll);
  
    // Retrieve all active pallets
    router.get("/active",  pallet.findAllPublished);
  
    // Retrieve a single pallet with id
    router.get("/:id",  pallet.findOne);
  
    // Update a pallet with id
    router.put("/:id",  pallet.update);
  
    // Delete a pallet with id
    router.delete("/:id",  pallet.delete);
  
    // Delete all pallets
    //router.delete("/",  pallet.deleteAll);
  
    app.use('/api/pallet', router);
  };