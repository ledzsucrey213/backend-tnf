const Evaluation = require("../models/Evaluation");

// Créer une évaluation
exports.createEvaluation = async (req, res) => {
  try {
    const { userId, type, note, humeur } = req.body;

    if (!userId || !type) {
      return res.status(400).json({ message: "userId et type sont requis" });
    }

    const evaluation = new Evaluation({
      userId,
      type,
      note,
      humeur,
    });

    await evaluation.save();

    res.status(201).json(evaluation);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur", error });
  }
};

// Récupérer toutes les évaluations d’un utilisateur
exports.getEvaluationsByUser = async (req, res) => {
  try {
    const { userId } = req.params;

    const evaluations = await Evaluation.find({ userId }).sort({
      createdAt: -1,
    });

    res.status(200).json(evaluations);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur", error });
  }
};
