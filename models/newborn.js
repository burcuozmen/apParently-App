var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new LibrarySchema object
// This is similar to a Sequelize model
var newBornSchema = new Schema({
  // `name` must be of type String
  // `name` must be unique, the default mongoose error message is thrown if a duplicate value is given
  name: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  gender: { type: String, required: true },
  birthdate: { type: Date, required: true  },
  weight: {  type: Number, required: true },
  length: {  type: Number, required: true },
  milstone: { type: String, required: false },
  date: { type: Date, default: Date.now },
  // `books` is an array that stores ObjectIds
  // The ref property links these ObjectIds to the Book model
  // This allows us to populate the Library with any associated Books
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  ]
});

// This creates our model from the above schema, using mongoose's model method
var Newborn = mongoose.model("Newborn", newBornSchema);

// Export the Library model
module.exports = Newborn;