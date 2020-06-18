//dependencies
const express = require("express");
const mongoose = require("mongoose");
const db = require("./models");

let app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

const PORT = process.env.PORT || 3030;

//routes
require("./routes/apiRoutes")(app);
require("./routes/hmtlRoutes")(app);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutDB", {
  useNewUrlParser: true,
});

app.listen(PORT, () => {
  console.log("app running on: " + PORT);
});
