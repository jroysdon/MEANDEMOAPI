const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  imagePath: { type: String},
  fileName: { type: String, required: true},
  createDate: { type: Date},
  editDate: { type: Date},
  author: {type: String},
  creator: { type: mongoose.Schema.Types.ObjectId, ref: "Wizard", required: true }
});

module.exports = mongoose.model("Post", postSchema);
