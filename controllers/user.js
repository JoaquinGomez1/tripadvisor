const userSchema = require("../models/user");
const Bcrypt = require("../helpers/encrypt")();

function User(req, res) {
  // Arrow function bc it needs to have access to its parent login function w/o binding 'this'
  const register = async () => {
    const { data } = req.body;
    const foundUser = await userSchema.findOne({
      $or: [{ username: data.username }, { email: data.email }],
    });
    if (foundUser) return res.json({ message: "Username/email already taken" });

    const encryptedPassword = await Bcrypt.encript(data.password);

    const dataCopy = Object.freeze({ ...data, password: encryptedPassword });
    new userSchema(dataCopy)
      .save()
      .then(() => this.login())
      .catch((err) => res.json({ err }));
  };

  async function login() {
    const { data } = req.body;
    const foundUser = await userSchema.findOne({ username: data.username });
    if (!foundUser) return res.json({ message: "No username found" });

    const doPasswordMatch = Bcrypt.compare(data.password, foundUser.password);
    if (!doPasswordMatch)
      return res.json({ message: "Username / Password does not match" });

    const foundUserCopy = { ...foundUser._doc };
    delete foundUserCopy.password;
    // Still have doubts about storing the entire user object or if I should store only their ID
    req.session.user = foundUserCopy;
    res.json({ message: "Logged in Succesfully" });
  }

  async function logout() {
    req.session.destroy();
  }

  async function get() {
    // this method only checks if the user is in the session store in or not (which essentially check wheter is logged in or not).
    const { user } = req.session;
    if (!user)
      return res.status(401).json({ message: "You are not logged in" });
    return res.json({ user });
  }

  return { register, login, logout, get };
}

module.exports = User;