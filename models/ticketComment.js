const mongoose = require("mongoose");

const ticketCommentSchema = new mongoose.Schema({
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  date: Date,
  isActive: Boolean,
  commentDescription: String,
});

const TicketComment = mongoose.model("TicketComment", ticketCommentSchema);

module.exports = TicketComment;
