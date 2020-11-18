const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const app = express();

// routes
const user = require("./routes/user");

require("dotenv").config();

const PORT = process.env.PORT || 3100;
const cookieMaxAge = 1000 * 60 * 60 * 24; // 24 Hours
const MONGO_URI = process.env.MONGOOSE_URI;
const DB_OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};

const connection = mongoose.createConnection(MONGO_URI, DB_OPTIONS);
const sessionStore = new MongoStore({
  mongooseConnection: connection,
  collection: "sessions",
});
const db = mongoose.connection;

try {
  mongoose.connect(MONGO_URI, DB_OPTIONS);
} catch (err) {
  console.log(err);
}

app.use(
  session({
    secret: "secret",
    store: sessionStore,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: cookieMaxAge,
      httpOnly: false,
    },
  })
);
app.use(bodyParser.json());

app.use(user);

app.get("/", (req, res) => {
  res.json({ message: "it works" });
});

db.once("open", () => console.log("connected to db"));
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
