const mongoose = require("mongoose");

const goalSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter a text"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Goal',goalSchema)
