var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new LibrarySchema object
// This is similar to a Sequelize model
var breastfeedingSchema = new Schema({
  // `name` must be of type String
  // `name` must be unique, the default mongoose error message is thrown if a duplicate value is given
  leftBreast: { type: String, required: false },
  rightBreast: { type: String, required: false },
  date: { type: Date, default: Date.now },
  // `books` is an array that stores ObjectIds
  // The ref property links these ObjectIds to the Book model
  // This allows us to populate the Library with any associated Books
  newborns: [
    {
      type: Schema.Types.ObjectId,
      ref: "Newborn"
    }
  ]
});

// This creates our model from the above schema, using mongoose's model method
var Breastfeeding = mongoose.model("Breastfeeding", breastfeedingSchema);

// Export the Library model
module.exports = Breastfeeding;