const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  authorName: {
    type: String,
    required: true,
    default: "Promitheus",
  },
  question: {
    type: String,
    required: true,
    default: "Question?",
  },
  content: {
    type: String,
    required: true,
    default:
      "This is a sample post content. The first part of the post content is for the post creator to go into detail about their question.",
  },
  comments: {
    type: [String],
    default: [
      "The second part of the post content is for any other use, such as comments, answers, or other discussions.",
      // ...additional comments
    ],
  },
  tags: {
    type: [String],
    default: ["CSE"],
  },
  date: {
    type: Date,
    default: Date.now,
  },
  likes: {
    type: Number,
    default: 0,
  },
  dislikes: {
    type: Number,
    default: 0,
  },
  isFlagged: {
    type: Boolean,
    default: false,
  },
  images: {
    type: [Buffer],
    default: [],
  },
});
const Post = mongoose.model("Post", postSchema);

module.exports = mongoose.model("Post", postSchema);
