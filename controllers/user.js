const userSchema = require("../models/user");
const Bcrypt = require("../helpers/encrypt")();

function User(req, res) {
  // Arrow function bc it needs to have access to its parent login function w/o binding 'this'
  const register = async () => {
    const { data } = req.body;
    const foundUser = await userSchema.findOne({
      $or: [{ username: data.username }, { email: data.email }],
    });
    if (foundUser)
      return res.status(400).json({ message: "Username/email already taken" });

    const encryptedPassword = await Bcrypt.encript(data.password);

    const dataCopy = Object.freeze({ ...data, password: encryptedPassword });
    new userSchema(dataCopy)
      .save()
      .then(() => {
        User.login();
      })
      .catch((err) => res.status(400).json({ err }));
  };

  async function login() {
    const { data } = req.body;
    const foundUser = await userSchema.findOne({ username: data.username });
    if (!foundUser)
      return res
        .status(400)
        .json({ message: "Username / Password does not match" });

    const doPasswordMatch = Bcrypt.compare(data.password, foundUser.password);
    if (!doPasswordMatch)
      return res
        .status(400)
        .json({ message: "Username / Password does not match" });

    const foundUserCopy = { ...foundUser._doc };
    delete foundUserCopy.password;
    // Still have doubts about storing the entire user object or if I should store only their ID
    req.session.user = foundUserCopy;
    res.json({ message: "Logged in Succesfully", userData: foundUserCopy });
  }

  async function logout() {
    req.session.destroy();
  }

  async function update() {
    const { data } = req.body;
    if (!data)
      return res.status(400).json({ message: "You must send a data object" });

    const isObjectEmpty = Object.keys(data).length === 0;

    if (isObjectEmpty)
      return res.status(400).json({ message: "Data object cannot be empty" });

    // Success case
    userSchema
      .findOneAndUpdate(
        { _id: req.session.user._id },
        { $set: data },
        { new: true }
      )
      .then((message) => res.json({ message }));
  }

  async function get() {
    // this method only checks if the user is in the session store in or not (which essentially check wheter is logged in or not).
    const { user } = req.session;
    if (!user)
      return res.status(401).json({ message: "You are not logged in" });
    return res.json({ user });
  }

  return { register, login, logout, get, update };
}

module.exports = User;
