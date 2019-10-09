const routes = require("express").Router();
const multer = require("multer");
const uploadConfig = require("../config/upload");

const UserController = require("../app/controllers/UserController");
const SpotController = require("../app/controllers/SpotController");
const ProfileController = require("../app/controllers/ProfileController");
const BookingController = require("../app/controllers/BookingController");

const upload = multer(uploadConfig);

routes.post("/user", UserController.store);

routes.get("/spot", SpotController.index);
routes.post("/spot", upload.single("thumbnail"), SpotController.store);
routes.post("/spot/:id/bookings",  BookingController.store);

routes.get("/profile", ProfileController.show);
