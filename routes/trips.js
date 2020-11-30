const router = require("express").Router();
const Trips = require("../controllers/trips");

router.get("/trips/", (req, res) => Trips(req, res).get());
router.post("/trips/add", (req, res) => Trips(req, res).add());
router.post("/trips/update", (req, res) => Trips(req, res).update());
router.delete("/trips/remove", (req, res) => Trips(req, res).remove());

module.exports = router;
