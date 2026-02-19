const EducPart = require("../models/EducPart");

// CREATE
exports.createEducPart = async (req, res) => {
  try {
    const educPart = await EducPart.create(req.body);
    res.status(201).json(educPart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET ALL
exports.getAllEducParts = async (req, res) => {
  try {
    const educParts = await EducPart.find();
    res.json(educParts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET ONE
exports.getEducPartById = async (req, res) => {
  try {
    const educPart = await EducPart.findById(req.params.id);
    if (!educPart)
      return res.status(404).json({ message: "Not found" });

    res.json(educPart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE
exports.deleteEducPart = async (req, res) => {
  try {
    await EducPart.findByIdAndDelete(req.params.id);
    res.json({ message: "EducPart deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
