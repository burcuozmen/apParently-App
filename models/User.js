const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  babies: [{ type: Schema.Types.ObjectId, ref: 'Baby' }],
  exercises: [{ type: Schema.Types.ObjectId, ref: 'Exercise' }]
});


const User = mongoose.model('users' , UserSchema);
// module.exports = User;

// Create Schema
const babySchema = new Schema({
 babyname: {
  createdBy: { type: Schema.Types.ObjectId, ref: 'users' },
   type: String,
   required: true,
   unique: true,
   trim: true,
   minlength: 3
 },
}, {
 timestamps: true,
});

const Baby = mongoose.model('Baby' , babySchema);
// module.exports = Baby;


// Ceate Schema 
const exerciseSchema = new Schema({
  createdBy: { type: Schema.Types.ObjectId, ref: 'users' },
  babyname: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: Number, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true,
});

const Exercise = mongoose.model('Exercise', exerciseSchema);
// module.exports = Exercise;

module.exports = {
  User: User,
  Baby: Baby,
  Exercise: Exercise
}