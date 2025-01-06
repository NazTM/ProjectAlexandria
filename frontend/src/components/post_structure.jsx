import { useState } from "react";
import axios from "axios";
import "./post.css"; // Import the CSS file

function Post_structure({ post }) {
  const [isFlagged, setIsFlagged] = useState(post.isFlagged);
  const [hasReacted, setHasReacted] = useState(false); // Tracks if the user has liked or disliked
  const [likes, setLikes] = useState(post.likes); // State for likes count
  const [dislikes, setDislikes] = useState(post.dislikes);
  const [newComment, setNewComment] = useState("");

  const toggleFlag = async () => {
    try {
      const updatedFlag = !isFlagged;
      await axios.put(`http://localhost:5000/api/posts/${post._id}/flag`, {
        isFlagged: updatedFlag,
      });
      setIsFlagged(updatedFlag);
    } catch (error) {
      console.error("Error updating flag status:", error);
    }
  };

  const handleLike = async () => {
    if (!hasReacted) {
      try {
        await axios.put(`http://localhost:5000/api/posts/${post._id}/like`);
        setLikes(likes + 1);
        setHasReacted(true);
      } catch (error) {
        console.error("Error liking post:", error);
      }
    }
  };

  const handleDislike = async () => {
    if (!hasReacted) {
      try {
        await axios.put(`http://localhost:5000/api/posts/${post._id}/dislike`);
        setDislikes(dislikes + 1);
        setHasReacted(true);
      } catch (error) {
        console.error("Error disliking post:", error);
      }
    }
  };

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/posts/${post._id}/comments`, {
        comment: newComment,
      });
      setNewComment("");
      // Update the post comments locally
      post.comments.push(newComment);
    } catch (error) {
      console.error("Error adding comment:", error);
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
        <form onSubmit={handleCommentSubmit}>
          <input
            type="text"
            value={newComment}
            onChange={handleCommentChange}
            placeholder="Add a comment"
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Post_structure;
