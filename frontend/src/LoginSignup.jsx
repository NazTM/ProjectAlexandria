import { useState } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import "./LoginSignup.css";
import "./home.css";
import Profile from "./profile_page";

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log("Logging in with", email, password);
    } else {
      console.log("Signing up with", email, password);
    }
    navigate("/profile_page");
  };

  return (
    <div className="login-signup-container">
      <header className="header">
        <Link to="/">Project Alexandria</Link>
        <Link to="/library">Library</Link>
        <Link to="/post">Ask a question</Link>
        <Link to="/feedback">Feedback</Link>
      </header>
      <Routes>
        <Route path="/profile_page" element={<Profile />} />
      </Routes>
      <div className="form-container">
        <h2>{isLogin ? "Login" : "Sign Up"}</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="submit-button">
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
        <p>
          {isLogin ? "Don’t have an account?" : "Already have an account?"}
          <span onClick={() => setIsLogin(!isLogin)} className="toggle-link">
            {isLogin ? "Sign Up" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginSignup;
