import { useState } from "react";
import { Link } from "react-router-dom";
import "./profile.css";
import Post_structure from "./components/post_structure";
const Profile = () => {
  // State to manage bio and bookmarks
  const [bio, setBio] = useState("");
  const [bookmarkedPosts, setBookmarkedPosts] = useState([
    "Post 1",
    "Post 2", // Example bookmarks, replace with actual data
  ]);

  // Handle bio update
  const handleBioChange = (e) => {
    setBio(e.target.value);
  };

  // Add new bookmark (for demonstration, you can replace this logic with actual bookmark management)
  const addBookmark = () => {
    setBookmarkedPosts([
      ...bookmarkedPosts,
      `Post ${bookmarkedPosts.length + 1}`,
    ]);
  };

  return (
    <div className="profile-container">
      <h1>Welcome to Your Profile</h1>
      <p>This is the profile page. Customize it as needed!</p>

      {/* Bio Section */}
      <div className="bio-section">
        <h2>Your Bio</h2>
        <textarea
          value={bio}
          onChange={handleBioChange}
          placeholder="Tell us about yourself..."
          rows="5"
          cols="40"
        />
        <button onClick={() => alert("Bio saved!")} className="save-bio-button">
          Save Bio
        </button>
      </div>

      {/* Bookmarked Posts Section */}
      <div className="bookmark-bar">
        <h2>Your Bookmarked Posts</h2>
        <ul>
          {bookmarkedPosts.length > 0 ? (
            bookmarkedPosts.map((post, index) => <li key={index}>{post}</li>)
          ) : (
            <p>No bookmarks yet!</p>
          )}
        </ul>
        <button onClick={addBookmark} className="add-bookmark-button">
          Add Bookmark
        </button>
      </div>

      {/* Logout Link */}
      <Link to="/" className="logout-button">
        Logout
      </Link>
    </div>
  );
};

export default Profile;
