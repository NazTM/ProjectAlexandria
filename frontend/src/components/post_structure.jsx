import { useState } from "react";
import "./post.css"; // Import the CSS file

function Post_structure() {
  const [authorName, setauthorName] = useState("Promitheus");

  const [isFlagged, setIsFlagged] = useState(false); // State to track flag status
  const [hasReacted, setHasReacted] = useState(false); // Tracks if the user has liked or disliked

  const toggleFlag = () => {
    setIsFlagged(!isFlagged);
  };
  const [likes, setLikes] = useState(0); // State for likes count
  const [dislikes, setDislikes] = useState(0);

  const formatDate = (date) => {
    const options = {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    };
    return new Intl.DateTimeFormat("en-US", options).format(date);
  };
  const [time, settime] = useState(formatDate(new Date()));

  const handleLike = () => {
    if (!hasReacted) {
      setLikes(likes + 1);
      setHasReacted(true);
    }
  };

  const handleDislike = () => {
    if (!hasReacted) {
      setDislikes(dislikes + 1);
      setHasReacted(true);
    }
  };
  const [tags, setTags] = useState(["CSE110", "CSE111"]);
  return (
    <>
      <div className="post">
        <h2 className="post-title">Question?</h2>{" "}
        {/*must be filled in when creating post */}
        <h3 className="post-content">
          This is a sample post content. The first part of the post content is
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
          <div className="tags-box">
            <span className="tags-title">Tags:</span>
            <ul className="tags-list">
              {tags.map((tag, index) => (
                <li key={index} className="tag">
                  {tag}
                </li>
              ))}
            </ul>
          </div>
          <div className="like-dislike-buttons">
            <button
              className="like-button"
              onClick={handleLike}
              disabled={hasReacted}
            >
              👍 Like {likes}
            </button>
            <button
              className="dislike-button"
              onClick={handleDislike}
              disabled={hasReacted}
            >
              👎 Dislike {dislikes}
            </button>
          </div>
          <span className="post-date">posted on: {time}</span>
          <button
            onClick={toggleFlag}
            className={`flag-button ${isFlagged ? "flagged" : ""}`}
          >
            {isFlagged ? "Unflag" : "Flag"}
          </button>
        </div>
      </div>
    </>
  );
}

export default Post_structure;
