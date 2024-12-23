import "./App.css";
import "./home.css";
import { useState } from "react";
function Post_structure() {
  const [authorName, setauthorName] = useState("Promitheus");
  const [time, settime] = useState(Date());
  return (
    <>
      <div className="post">
        <h2 className="post-title">Question?</h2>{" "}
        {/*must be filled in when creating post */}
        <h3 className="post-content">
          This is a sample post content.the first part of the post content in
          for the post creator to go into detail about their question.
        </h3>
        <ul className="post-list">
          {Array.from({ length: 5 }).map((_, index) => (
            /*array length change to number of actual comments later. */
            <li key={index}>
              <p className="post-content">
                The second part of the post content is for any other use, such
                as comments, answers, or other discussions.
              </p>
            </li>
          ))}
        </ul>
        <div className="post-footer">
          <span className="post-author">By {authorName}.</span>{" "}
          {/*will change to username attribute later*/}
          <span className="post-date">posted on: {time}</span>
        </div>
      </div>
    </>
  );
}

export default Post_structure;
