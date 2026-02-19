const express = require("express");
const router = express.Router();
const educPartController = require("../controllers/educpart.controller");

router.post("/", educPartController.createEducPart);
router.get("/", educPartController.getAllEducParts);
router.get("/:id", educPartController.getEducPartById);
router.delete("/:id", educPartController.deleteEducPart);

module.exports = router;
