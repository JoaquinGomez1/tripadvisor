const notLoggedIn = (req, res, next) => {
  if (req.session.user)
    return res.json({ message: "You are already logged in" });
  next();
};

module.exports = notLoggedIn;
