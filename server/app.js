const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileupload = require("express-fileupload");

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true, limit: "5mb" }));
app.use(fileupload());

// * IMPORT ROUTES
const user = require("./routes/user.routes");
const product = require("./routes/product.routes");

// * CALL ROUTES
app.use("/api/v1", user);
app.use("/api/v1", product);

module.exports = app;
