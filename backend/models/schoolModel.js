const mongoose = require("mongoose");

const schoolSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      required: true,
    },
    start: {
      type: Date,
    },
    end: {
      type: Date,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("School", schoolSchema);
