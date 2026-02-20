require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/media", require("./routes/media.routes"));
app.use("/api/educparts", require("./routes/educpart.routes"));
app.use("/api/outils", require("./routes/outils.routes"));
app.use("/api/user", require("./routes/user.routes"));
app.use("/api/evaluation", require("./routes/evaluation.routes"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Serveur lancé sur ${PORT}`));
