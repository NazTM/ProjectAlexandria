//root component
import { useState } from "react";
import "./App.css";
import "./home.css";
//import Searchbar from "./components/Searchbar";
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import router from './router'
import Post_structure from "./post_structure";
//import LoginSignup from "./LoginSignup";

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
  const handleClick = () => {
    setName("Hrithik.");
  };

  return (
    <>
      {/*<Router>*/}
      <body>
        <div className="home-container">
          <header className="header">
            <a href="/">Project Alexandria</a>
            <a href="/library">Library</a>
            <a href="/post">Ask a question</a>
            <a href="/feedback">Feedback</a>
            <a href="/LoginSignup">Login/signup</a>
          </header>
          {/*<Switch>
              <Route exact path="/LoginSignup">
                <LoginSignup />
              </Route>
            </Switch>*/}
          <main className="main">
            <div className="post-grid">
              {post.map((_, index) => (
                <Post_structure key={index} />
              ))}
            </div>
          </main>

          <footer className="footer">
            <p>
              coded by
              {<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Promit</a>}
              ,{" "}
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
      </body>
      {/*</Router>*/}
    </>
  );
}

export default App;
