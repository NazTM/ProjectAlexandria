//root component
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import "./home.css";
import Post_structure from "./components/post_structure";
import LoginSignup from "./LoginSignup";
import FeedbackPage from "./feedback";
import Profile from "./profile_page";
//import { fetchItems } from "./api";

function App() {
  const [post, setPost] = useState([
    { Post_structure },
    { Post_structure },
    { Post_structure },
    { Post_structure },
    { Post_structure },
    { Post_structure },
  ]);
  const [name, setName] = useState("Hritik");
  const [notice, setNotice] = useState(
    "Welcome to Project Alexandria! Enjoy browsing and feel free to ask questions."
  );

  useEffect(() => {
    const getItems = async () => {
      try {
        const data = await fetchItems();
        setItems(data);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    getItems();
  }, []);

  const handleClick = () => {
    setName("Hrithik.");
  };

  return (
    <div className="home-container">
      <header className="header">
        <Link to="/">Project Alexandria</Link>
        <Link to="/library">Library</Link>
        <Link to="/post">Ask a question</Link>
        <Link to="/feedback">Feedback</Link>
        <Link to="/LoginSignup">Login/Signup</Link>
        <Routes>
          <Route path="/feedback" element={<FeedbackPage />} />
          <Route path="/LoginSignup" element={<LoginSignup />} />
          <Route path="/profile_page" element={<Profile />} />
        </Routes>
      </header>

      <main className="main">
        <div className="notice-board">
          <p>{notice}</p> {/* Display the notice message */}
        </div>
        <div className="post-grid">
          {post.map((_, index) => (
            <Post_structure key={index} />
          ))}
        </div>
      </main>

      <footer className="footer">
        <p>
          coded by
          {
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Promit</a>
          },{" "}
          <button
            onClick={() => {
              handleClick();
            }}
          >
            Kazi
          </button>
          , Naziba, and {name}. &copy;
          {Math.floor(Math.random() * (2500 - 1500 + 1)) + 1500} Project
          Alexandria.
        </p>
      </footer>
    </div>
  );
}

export default App;
