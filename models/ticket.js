const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  priority: Number,
  progress: Boolean,
  category: {
    type: String,
    required: true,
  },
  createdDate: Date,
  closedDate: Date,
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  supportName: String,
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
});

const Ticket = mongoose.model("Ticket", ticketSchema);

module.exports = Ticket;
