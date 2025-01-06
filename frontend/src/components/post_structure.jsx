import { useState } from "react";
import "./post.css"; // Import the CSS file

function Post_structure({ post }) {
  const [isFlagged, setIsFlagged] = useState(post.isFlagged);
  const [hasReacted, setHasReacted] = useState(false); // Tracks if the user has liked or disliked
  const [likes, setLikes] = useState(post.likes); // State for likes count
  const [dislikes, setDislikes] = useState(post.dislikes);

  const toggleFlag = () => {
    setIsFlagged(!isFlagged);
  };

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

  return (
    <>
      <div className="post">
        <h2 className="post-title">{post.question}</h2>
        <ul className="post-list">
          {post.comments.map((comment, index) => (
            <li key={index}>
              <p className="post-content">{comment}</p>
            </li>
          ))}
        </ul>
        <div className="post-footer">
          <span className="post-author">By {post.authorName}.</span>
          <div className="tags-box">
            <span className="tags-title">Tags:</span>
            <ul className="tags-list">
              {post.tags.map((tag, index) => (
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
          <span className="post-date">
            posted on: {new Date(post.date).toLocaleString()}
          </span>
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
