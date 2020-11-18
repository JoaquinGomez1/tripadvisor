const router = require("express").Router();
const User = require("../controllers/user");

router.get("/user/", (req, res) => User(req, res).get());
router.post("/user/login", (req, res) => User(req, res).login());
router.post("/user/register", (req, res) => User(req, res).register());
router.get("/user/logout", (req, res) => User(req, res).logout());

module.exports = router;
