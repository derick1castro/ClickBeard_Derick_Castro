const router = require("express").Router();

const AdminController = require("../controlers/AdminController");

router.post("/register", AdminController.register);
router.post("/login", AdminController.login);

module.exports = router;
