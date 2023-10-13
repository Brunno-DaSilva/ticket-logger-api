const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  ticketID: { type: mongoose.Schema.Types.ObjectId, ref: "Ticket" },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  isActive: Boolean,
  date: Date,
  commentDescription: String,
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
