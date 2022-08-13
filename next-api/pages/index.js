import { useRef, useState } from "react";

function HomePage() {
  const [feedbackItems, setFeedbackItems] = useState([]);

  const emailInputRef = useRef();
  const feedbackInputRef = useRef();

  const submitHandler = async (e) => {
    e.preventDefault();

    const email = emailInputRef.current.value;
    const feedback = feedbackInputRef.current.value;

    const response = await fetch("/api/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, feedbackText: feedback }),
    });

    const data = await response.json();
    // console.log(data);
  };

  const loadFeedbackHandler = async () => {
    const response = await fetch("/api/feedback");
    const data = await response.json();
    console.log("data");
    console.log(data);
    setFeedbackItems(data.feedback);
  };

  return (
    <div>
      <h1>The Home Page</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" ref={emailInputRef} />
        </div>

        <div>
          <label htmlFor="feedback">Feedback</label>
          <textarea id="feedback" rows="5" ref={feedbackInputRef} />
        </div>
        <button>Send Feedback</button>
      </form>
      <hr />
      <button onClick={loadFeedbackHandler}>Load Feedback</button>
      <ul>
        {feedbackItems.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
