const express = require("express");
const app = express();

app.use(express.json());

// * IMPORT ROUTES
const user = require("./routes/user.routes");

// * CALL ROUTES
app.use("/api/v1", user);

module.exports = app;
