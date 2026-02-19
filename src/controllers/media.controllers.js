exports.uploadFile = (req, res) => {
  try {
    res.json({
      message: "Fichier uploadé",
      fileUrl: req.file.location,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
