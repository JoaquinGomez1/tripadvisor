const tripsSchema = require("../models/trips");
const removeEmptyFields = require("../helpers/removeEmptyFields");

// All of these methods depend on the user being logged in
function Trips(req, res) {
  const { user } = req.session;
  const { data } = req.body;
  const tripId = data && data._id;

  async function add() {
    if (!data) return res.json({ message: "No data provided" });

    // TODO: figure out how to store and verify images
    try {
      data.author = user._id;
      const savedTrip = await new tripsSchema(data).save();
      return res.json({ message: savedTrip });
    } catch (err) {
      return res.json(err);
    }
  }

  async function update() {
    if (!tripId) return res.json({ message: "No trip id provided" });

    const dataWithNoEmptyFields = removeEmptyFields(data);

    tripsSchema
      .findByIdAndUpdate(tripId, { $set: dataWithNoEmptyFields })
      .then((foundTrip) => res.json({ message: foundTrip }))
      .catch((err) => res.status(500).json({ message: err }));
  }

  function remove() {
    const { tripId } = req.params;
    if (!tripId) return res.json({ message: "No trip id provided" });

    tripsSchema
      .findByIdAndDelete(tripId)
      .then(() => res.json({ message: "Trip deleted succesfully" }))
      .catch((err) => res.status(500).json({ message: err }));
  }

  async function get() {
    const { tripId } = req.params;
    if (!tripId) return res.json({ message: "No trip id provided" });

    const foundTrip = await tripsSchema.findById(tripId);
    res.json(foundTrip);
  }

  return { add, update, remove, get };
}

module.exports = Trips;
