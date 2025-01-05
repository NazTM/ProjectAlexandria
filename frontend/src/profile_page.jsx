import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./profile.css";
import Post_structure from "./components/post_structure";
import "./post.css";
import { getProfile, updateBio } from "./api"; // Import the new API method

const Profile = () => {
  // State to manage bio, bookmarks, and username
  const [bio, setBio] = useState("");
  const [bookmarkedPosts, setBookmarkedPosts] = useState([
    { id: 1, title: "Post 1", content: "Content for Post 1" },
    { id: 2, title: "Post 2", content: "Content for Post 2" }, // Example bookmarks, replace with actual data
  ]);
  const [username, setUsername] = useState(""); // Add state for username

  const location = useLocation();

  // Fetch user profile on component mount
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await getProfile(location.state.username); // Use username from navigation state
        setUsername(response.data.username);
        setBio(response.data.bio || ""); // Set bio from response
        // Set other profile data as needed
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    if (location.state && location.state.username) {
      fetchProfile();
    }
  }, [location.state]);

  // Handle bio update
  const handleBioChange = (e) => {
    setBio(e.target.value);
  };

  const saveBio = async () => {
    try {
      await updateBio(username, bio);
      alert("Bio saved!");
    } catch (error) {
      console.error("Error saving bio:", error);
      alert("Error saving bio");
    }
  };

  // Add new bookmark (for demonstration, you can replace this logic with actual bookmark management)
  const addBookmark = () => {
    const newPostId = bookmarkedPosts.length + 1;
    setBookmarkedPosts([
      ...bookmarkedPosts,
      {
        id: newPostId,
        title: `Post ${newPostId}`,
        content: `Content for Post ${newPostId}`,
      },
    ]);
  };

  return (
    <div className="profile-container">
      <h1>Welcome to {username}'s Profile</h1> {/* Update heading */}
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
        <button onClick={saveBio} className="save-bio-button">
          Save Bio
        </button>
      </div>
      {/* Bookmarked Posts Section */}
      <h2>Your Bookmarked Posts</h2>
      {bookmarkedPosts.length > 0 ? (
        bookmarkedPosts.map((post) => (
          <Post_structure
            key={post.id}
            title={post.title}
            content={post.content}
          />
        ))
      ) : (
        <p>No bookmarks yet!</p>
      )}
      <button onClick={addBookmark} className="add-bookmark-button">
        Add Bookmark
      </button>
      {/* Logout Link */}
      <Link to="/" className="logout-button">
        Logout
      </Link>
    </div>
  );
};

export default Profile;
