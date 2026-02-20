const express = require("express");
const router = express.Router();
const evaluationController = require("../controllers/evaluationController");

// POST créer une évaluation
router.post("/", evaluationController.createEvaluation);

// GET récupérer les évaluations d’un utilisateur
router.get("/:userId", evaluationController.getEvaluationsByUser);

module.exports = router;
