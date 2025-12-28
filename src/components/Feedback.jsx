import { useState } from "react";
import "./Feedback.css";

const Feedback = () => {
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (rating === 0 || comment.trim() === "") {
      alert("Please give rating and comment");
      return;
    }

    console.log({
      rating,
      comment,
    });

    setSubmitted(true);

    setTimeout(() => {
      setOpen(false);
      setRating(0);
      setComment("");
      setSubmitted(false);
    }, 12000);
  };

  return (
    <>
      {/* Vertical Button */}
      <button className="feedback-btn" onClick={() => setOpen(true)}>
        Feedback
      </button>

      {/* Slide Panel */}
      <div className={`feedback-panel ${open ? "open" : ""}`}>
        <span className="close" onClick={() => setOpen(false)}>×</span>

        {!submitted ? (
          <>
            <h3>Give us feedback</h3>

            {/* Stars */}
            <div className="stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={star <= rating ? "active" : ""}
                  onClick={() => setRating(star)}
                >
                  ★
                </span>
              ))}
            </div>

            {/* Comment Box */}
            <textarea
              className="comment-box"
              placeholder="Write your comments here..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />

            <button className="submit-btn" onClick={handleSubmit}>
              Submit Feedback
            </button>
          </>
        ) : (
          <h3 className="thanks">Thanks for your feedback</h3>
        )}
      </div>
    </>
  );
};

export default Feedback;
