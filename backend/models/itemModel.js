const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  user_id: String,
  title: String,
  description: String,
  category: String,
  type: String,
  size: String,
  condition: String,
  tags: [String],
  points: Number,
  available_for_swap: Boolean,
  images: [String],
  status: { type: String, default: 'Pending Approval' }
});

module.exports = mongoose.model('Item', itemSchema);
