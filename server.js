const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");
const passport = require("passport");

require('dotenv').config();

const users = require("./routes/api/users");
const exercisesRouter = require('./routes/exercises');
const babiesRouter = require('./routes/babies');

const app = express();

app.use(cors());
// Bodyparser middleware
app.use(
  express.urlencoded({
    extended: false
  })
);
app.use(express.json());

// mongoose.connect("mongodb://localhost/testDB02", { useNewUrlParser: true });
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/testDB02";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

// DB Config
//const db = require("./config/keys").mongoURI;

/* Connect to MongoDB
  mongoose
    .connect(
      db,
      { useNewUrlParser: true }
    )
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));
*/
// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);
app.use('/exercises', exercisesRouter);
app.use('/babies', babiesRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));
