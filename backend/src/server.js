const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
const port = process.env.PORT || 3333;

require("./database/database");

const routes = require("./Routes/routes");

const app = express();
app.use(cors());
app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/files", express.static(path.resolve(__dirname, "..", "Uploads")));

app.use(routes);

app.listen(port, () => console.log(`Port ${port}`));
