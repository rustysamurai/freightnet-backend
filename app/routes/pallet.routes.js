module.exports = app => {
  const { authJwt } = require("../middleware");
    const pallet = require("../controllers/pallet.controller.js");
  
    var router = require("express").Router();
  
    // Create a new pallet
    router.post("/", [authJwt.verifyToken], pallet.create);
  
    // Retrieve all pallets
    router.get("/", [authJwt.verifyToken], pallet.findAll);
  
    // Retrieve all active pallets
    router.get("/active", [authJwt.verifyToken], pallet.findAllPublished);
  
    // Retrieve a single pallet with id
    router.get("/:id", [authJwt.verifyToken], pallet.findOne);
  
    // Update a pallet with id
    router.put("/:id", [authJwt.verifyToken], pallet.update);
  
    // Delete a pallet with id
    router.delete("/:id", [authJwt.verifyToken], pallet.delete);
  
    // Delete all pallets
    //router.delete("/", [authJwt.verifyToken], pallet.deleteAll);
  
    app.use('/api/pallet', router);
  };