import { useState } from "react";
import "./Feedback.css";

const FeedbackPage = () => {
  const [feedback, setFeedback] = useState("");

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleFeedbackSubmit = () => {
    if (feedback.trim()) {
      alert("Thank you for your feedback: " + feedback);
      setFeedback("");
    } else {
      alert("Please enter your feedback before submitting.");
    }
  };

  return (
    <div className="body">
      <h1 className="header">Feedback Page</h1>
      <div className="container">
        <div className="feedbackBox">
          <h3 className="feedbackTitle">Feedback Box</h3>
          <textarea
            className="textarea"
            placeholder="Write your feedback here..."
            value={feedback}
            onChange={handleFeedbackChange}
          />
          <button className="button" onClick={handleFeedbackSubmit}>
            Submit Feedback
          </button>
        </div>
      </div>
      <footer className="footer">
        <p>Feedback Page - Coded by Promit, Kazi, Naziba, and Hrithik.</p>
      </footer>
    </div>
  );
};

export default FeedbackPage;
