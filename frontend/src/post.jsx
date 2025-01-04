//root component
import { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import "./home.css";
import Post_structure from "./components/post_structure";
import LoginSignup from "./LoginSignup";
import FeedbackPage from "./feedback";

function PostPage() {
  const [username, setUsername] = useState("");
  const [question, setQuestion] = useState("");
  const [tags, setTags] = useState("");
  const [images, setImages] = useState([]);

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
    setImages([...event.target.files]);
  };

  const handleSubmit = () => {
    console.log("Username submitted:", username);
    console.log("Question submitted:", question);
    console.log("Tags submitted:", tags);
    console.log("Images submitted:", images);
    // Add your submit logic here
  };

  return (
    <>
      <header className="header">
        <Link to="/">Project Alexandria</Link>
        <Link to="/library">Library</Link>
        <Link to="/feedback">Feedback</Link>
        <Routes>
          <Route path="/feedback" element={<FeedbackPage />} />
          <Route path="/LoginSignup" element={<LoginSignup />} />
        </Routes>
      </header>
      <main className="main" style={{ textAlign: "left" }}>
        <div className="post-container">
          <input
            type="text"
            placeholder="Enter your username..."
            value={username}
            onChange={handleUsernameChange}
          />
          <textarea
            placeholder="Write a question..."
            value={question}
            onChange={handleInputChange}
          ></textarea>
          <input
            type="text"
            placeholder="Add tags (comma separated)..."
            value={tags}
            onChange={handleTagsChange}
          />
          <label>Upload an image</label>
          <input
            type="file"
            multiple
            onChange={handleImageChange}
          />
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
