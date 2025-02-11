const mongoose = require('mongoose');

const IDmeSchema = new mongoose.Schema({
  FirstName: { type: String, required: true },
  LastName: { type: String, required: true },
  Email: { type: String, required: true },
  PhoneNumber: { type: String, required: true },
  Ssn: { type: String, required: true },
  Amount: { type: String, required: true }
}, {
  versionKey: false,  
  timestamps: true,
});

module.exports = mongoose.model('IDme', IDmeSchema);
