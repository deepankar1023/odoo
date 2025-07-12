const Item = require('../models/itemModel');

exports.addItem = async (req, res) => {
  try {
    const {
      user_id, title, description, category, type, size, condition, tags, points, available_for_swap
    } = req.body;
    const images = req.files ? req.files.map(file => file.path) : [];

    if (!user_id || !title || !description || !category || !size || !condition) {
      return res.status(400).json({ success: false, message: 'Missing required fields.' });
    }

    const item = new Item({
      user_id,
      title,
      description,
      category,
      type,
      size,
      condition,
      tags: tags ? tags.split(',') : [],
      points,
      available_for_swap,
      images
    });

    await item.save();
    res.json({ success: true, item_id: item._id, status: item.status });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
