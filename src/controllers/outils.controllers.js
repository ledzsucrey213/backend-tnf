const Outils = require("../models/Outils");


// ✅ CREATE une catégorie Outils
exports.createOutils = async (req, res) => {
  try {
    const outils = await Outils.create(req.body);
    res.status(201).json(outils);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// ✅ GET tous les outils
exports.getAllOutils = async (req, res) => {
  try {
    const outils = await Outils.find();
    res.status(200).json(outils);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// ✅ GET un outil par ID
exports.getOutilsById = async (req, res) => {
  try {
    const outils = await Outils.findById(req.params.id);

    if (!outils) {
      return res.status(404).json({ message: "Outils non trouvé" });
    }

    res.status(200).json(outils);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// ✅ UPDATE un outil
exports.updateOutils = async (req, res) => {
  try {
    const outils = await Outils.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!outils) {
      return res.status(404).json({ message: "Outils non trouvé" });
    }

    res.status(200).json(outils);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// ✅ DELETE un outil
exports.deleteOutils = async (req, res) => {
  try {
    const outils = await Outils.findByIdAndDelete(req.params.id);

    if (!outils) {
      return res.status(404).json({ message: "Outils non trouvé" });
    }

    res.status(200).json({ message: "Outils supprimé avec succès" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
