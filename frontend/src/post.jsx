import { useState } from "react";
import "./post.css";

function PostPage() {
  const [question, setQuestion] = useState("");

  const handleInputChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleSubmit = () => {
    console.log("Question submitted:", question);
    // Add your submit logic here
  };

  return (
    <>
      <body>
        <header>
          <a href="home 2.html">Project Alexandria</a>
          <a href="library.html">Library</a>
          <a href="post.html">Post</a>
          <a href="feedback.html">Feedback</a>
          <a href="login/signup.html">Login/signup</a>
        </header>
        <main>
          <div className="post-container">
            <textarea
              placeholder="Write a question..."
              value={question}
              onChange={handleInputChange}
            ></textarea>
            <button onClick={handleSubmit}>Post</button>
          </div>
        </main>
        <footer>
          <p>coded by Promit, Kazi, Naziba and Hritik.</p>
        </footer>
      </body>
    </>
  );
}

export default PostPage;
