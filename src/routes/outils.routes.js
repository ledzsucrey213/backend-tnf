const express = require("express");
const router = express.Router();
const outilsController = require("../controllers/outils.controller");

// CRUD principal
router.post("/", outilsController.createOutils);
router.get("/", outilsController.getAllOutils);
router.get("/:id", outilsController.getOutilsById);
router.put("/:id", outilsController.updateOutils);
router.delete("/:id", outilsController.deleteOutils);

module.exports = router;
