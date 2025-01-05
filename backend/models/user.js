const mongoose = require("mongoose"); // Import Mongoose

// Define the user schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true, // Username is required
  },
  password: {
    type: String,
    required: true, // Password is required
  },
  bio: {
    type: String, // Bio is optional
  },
});

// Create the User model based on the schema
const User = mongoose.model("User", userSchema);

// Export the User model
module.exports = User;
