const routes = require("express").Router();
const multer = require("multer");
const uploadConfig = require("../config/upload");

const UserController = require("../app/controllers/UserController");
const SpotController = require("../app/controllers/SpotController");

const upload = multer(uploadConfig);

routes.post("/user", UserController.store);

routes.post("/spot", upload.single("thumbnail"), SpotController.store);
