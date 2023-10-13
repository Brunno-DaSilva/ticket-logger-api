const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  picture: String,
  isStaff: Boolean,
  isActive: Boolean,
  joinedDate: Date,
  lastLoginDate: Date,
  permissions: [String],
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
  password: String,
  username: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
