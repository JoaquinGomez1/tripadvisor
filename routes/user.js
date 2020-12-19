const router = require("express").Router();
const User = require("../controllers/user");
const loggedInOnly = require("../middlewares/loggedIn");
const NotLoggedInOnly = require("../middlewares/notLoggedIn");

router.get("/user/", (req, res) => User(req, res).get());
router.post("/user/update", loggedInOnly, (req, res) =>
  User(req, res).update()
);
router.post("/user/login", NotLoggedInOnly, (req, res) =>
  User(req, res).login()
);
router.post("/user/register", NotLoggedInOnly, (req, res) =>
  User(req, res).register()
);
router.get("/user/logout", loggedInOnly, (req, res) => User(req, res).logout());

module.exports = router;
