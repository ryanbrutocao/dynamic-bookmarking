//thinking this is not needed for sequelize and handlebars
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Book" model that matches up with DB
var Resource = sequelize.define("dynamic_bookmarks", {
  link: Sequelize.STRING,
  category: Sequelize.STRING,
  notes: Sequelize.STRING,
  tag1: Sequelize.STRING,
  tag2: Sequelize.STRING,
  tag3: Sequelize.STRING,
  tag4: Sequelize.STRING,
  tag5: Sequelize.STRING,

});

// Syncs with DB
Resource.sync();

// Makes the Book Model available for other files (will also create a table)
module.exports = Resource;
