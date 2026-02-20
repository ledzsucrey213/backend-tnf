const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Inscription
router.post("/register", userController.register);

// Connexion
router.post("/login", userController.login);

// Récupérer un utilisateur
router.get("/:id", userController.getUser);

module.exports = router;
