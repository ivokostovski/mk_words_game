const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  points: { type: Number, required: false, default: 0 }
});

module.exports = mongoose.model('User', userSchema);
