const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const collectionItems = new Schema({
  items: [String],
  photo: String,
  date: String,
  time: String,
  address: String,
  status: {
    type: Boolean,
    default: false,
  },
  accepted: {
    type: Boolean,
    default: false,
  },
  resolved: {
    type: Boolean,
    default: false,
  },
});
const collectionItemsSchema = mongoose.model(
  "collectionItems",
  collectionItems
);
module.exports = collectionItemsSchema;
