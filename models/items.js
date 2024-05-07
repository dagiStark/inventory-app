const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  index: { type: Number },
  name: { type: String },
  description: { type: String },
  category: { type: String },
  price: { type: Number },
  number_in_stock: { type: Number },
});


module.exports = mongoose.model("Item", ItemSchema);
