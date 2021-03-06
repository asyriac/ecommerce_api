// Including modules
const mongoose = require("mongoose");

// Connecting to the DB
mongoose.connect("mongodb://localhost/ecommerce", { useUnifiedTopology: true, useNewUrlParser: true });

const db = mongoose.connection;
db.on("error", function() {
  console.log("Error connecting to database");
});

db.once("open", function() {
  console.log("Connection establised to database");
});

module.exports = db;
