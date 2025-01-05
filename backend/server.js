const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const multer = require("multer");
const User = require("./models/user");
const Post = require("./models/postsch");

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/user")
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("MongoDB connection error:", error));

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));

app.use(cors());
app.use(bodyParser.json());

const upload = multer({ storage: multer.memoryStorage() });

app.get("/", (req, res) => {
  res.send("Hello from the backend!");
});

// Endpoint to fetch users from the database
app.get("/api/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).send(error);
  }
});

// Endpoint to fetch a user's profile by username
app.get("/api/users/:username", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    if (user) {
      res.json(user);
    } else {
      res.status(404).send("User not found");
    }
  } catch (error) {
    console.error("Error fetching user profile:", error);
    res.status(500).send("Server error");
  }
});

// POST endpoint to add a new user
app.post("/api/signup", async (req, res) => {
  const { username, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      password: hashedPassword,
    });
    const savedUser = await newUser.save();
    console.log("User saved:", savedUser); // Add logging
    res.status(201).json(savedUser);
  } catch (error) {
    console.error("Error saving user:", error);
    res.status(400).send("Error saving user");
  }
});

// POST endpoint for user login
app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (user && (await bcrypt.compare(password, user.password))) {
      console.log("Login successful for user:", username); // Add logging
      res.status(200).send("Login successful");
    } else {
      console.log("Invalid credentials for user:", username); // Add logging
      res.status(400).send("Invalid credentials");
    }
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).send("Server error");
  }
});

// PUT endpoint to update a user
app.put("/api/users/:id", async (req, res) => {
  try {
    const { username, password } = req.body;
    const updateData = { username };
    if (password) {
      updateData.password = await bcrypt.hash(password, 10);
    }
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );
    console.log("User updated:", updatedUser); // Add logging
    res.json(updatedUser);
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(400).send("Error updating user");
  }
});

// Endpoint to update a user's bio
app.put("/api/users/:username/bio", async (req, res) => {
  const { bio } = req.body;
  try {
    const user = await User.findOneAndUpdate(
      { username: req.params.username },
      { bio },
      { new: true }
    );
    if (user) {
      res.json(user);
    } else {
      res.status(404).send("User not found");
    }
  } catch (error) {
    console.error("Error updating bio:", error);
    res.status(500).send("Server error");
  }
});

// DELETE endpoint to delete a user
app.delete("/api/users/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    console.log("User deleted:", req.params.id); // Add logging
    res.status(204).send();
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(400).send("Error deleting user");
  }
});

// Endpoint to fetch posts from the database
app.get("/api/posts", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).send(error);
  }
});

// Endpoint to fetch a post by ID
app.get("/api/posts/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post) {
      res.json(post);
    } else {
      res.status(404).send("Post not found");
    }
  } catch (error) {
    console.error("Error fetching post:", error);
    res.status(500).send("Server error");
  }
});

// POST endpoint to add a new post
app.post("/api/posts", upload.array("images"), async (req, res) => {
  const { authorName, question, tags } = req.body;
  const images = req.files.map((file) => file.buffer);
  try {
    const newPost = new Post({
      authorName,
      question,
      tags: tags.split(",").map((tag) => tag.trim()),
      images,
    });
    const savedPost = await newPost.save();
    console.log("Post saved:", savedPost); // Add logging
    res.status(201).json(savedPost);
  } catch (error) {
    console.error("Error saving post:", error);
    res.status(400).send("Error saving post");
  }
});

// PUT endpoint to update a post
app.put("/api/posts/:id", async (req, res) => {
  try {
    const { authorName, question, content, comments, tags } = req.body;
    const updateData = { authorName, question, content, comments, tags };
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );
    console.log("Post updated:", updatedPost); // Add logging
    res.json(updatedPost);
  } catch (error) {
    console.error("Error updating post:", error);
    res.status(400).send("Error updating post");
  }
});

// DELETE endpoint to delete a post
app.delete("/api/posts/:id", async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    console.log("Post deleted:", req.params.id); // Add logging
    res.status(204).send();
  } catch (error) {
    console.error("Error deleting post:", error);
    res.status(400).send("Error deleting post");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
