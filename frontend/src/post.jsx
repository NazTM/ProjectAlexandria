import { useState } from "react";
import { Link, Routes, Route, useNavigate } from "react-router-dom"; // Import useNavigate
import "./post.css"; // Import the post.css file
import LoginSignup from "./LoginSignup";
import FeedbackPage from "./feedback";
import axios from "axios";
import { createPost } from "./api"; // Import the createPost function

function PostPage() {
  const [username, setUsername] = useState("");
  const [question, setQuestion] = useState("");
  const [tags, setTags] = useState("");
  const [images, setImages] = useState([]);
  const [previewImage, setPreviewImage] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleInputChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleTagsChange = (event) => {
    setTags(event.target.value);
  };

  const handleImageChange = (event) => {
    const files = [...event.target.files];
    setImages(files);
    if (files.length > 0) {
      setPreviewImage(URL.createObjectURL(files[0]));
    }
  };

  const handleRemoveImage = () => {
    setImages([]);
    setPreviewImage(null);
    document.querySelector('input[type="file"]').value = null;
  };

  const handleSubmit = async () => {
    console.log("Username submitted:", username);
    console.log("Question submitted:", question);
    console.log("Tags submitted:", tags);
    console.log("Images submitted:", images);

    try {
      const formData = new FormData();
      formData.append("authorName", username);
      formData.append("question", question);
      formData.append("tags", tags);
      images.forEach((image, index) => {
        formData.append(`images[${index}]`, image);
      });

      const response = await createPost(formData); // Use createPost function from api.js

      console.log("Post submitted successfully:", response.data);
      navigate("/"); // Navigate back to home page
    } catch (error) {
      console.error("Error submitting post:", error);
    }
  };

  return (
    <>
      <header className="header">
        <Link to="/">Project Alexandria</Link>
        <Link to="/library">Library</Link>
        <Link to="/feedback">Feedback</Link>
      </header>
      <Routes>
        <Route path="/feedback" element={<FeedbackPage />} />
        <Route path="/LoginSignup" element={<LoginSignup />} />
      </Routes>
      <main className="main" style={{ textAlign: "left" }}>
        <div className="post-container">
          <label>
            <h1>Ask a question</h1>
          </label>
          <label>Enter your username (can be anonymous)</label>
          <input
            type="text"
            placeholder="Enter your username (can be anonymous)..."
            value={username}
            onChange={handleUsernameChange}
          />
          <textarea
            placeholder="Write your question..."
            value={question}
            onChange={handleInputChange}
          ></textarea>
          <label>Add tags (comma separated)</label>
          <input
            type="text"
            placeholder="Add tags (comma separated)..."
            value={tags}
            onChange={handleTagsChange}
          />
          <label>Upload an image</label>
          <input type="file" multiple onChange={handleImageChange} />
          {previewImage && (
            <div className="image-preview">
              <img
                src={previewImage}
                alt="Preview"
                style={{ width: "100px", height: "100px", cursor: "pointer" }}
                onClick={() => window.open(previewImage, "_blank")}
              />
              <button onClick={handleRemoveImage}>Remove Image</button>
            </div>
          )}
          <button onClick={handleSubmit}>Post</button>
        </div>
      </main>
      <footer className="footer">
        <p>coded by Promit, Kazi, Naziba and Hritik.</p>
      </footer>
    </>
  );
}

export default PostPage;
