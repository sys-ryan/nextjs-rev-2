import { useState } from "react";
import classes from "./newsletter-registration.module.css";

function NewsletterRegistration() {
  const [userInput, setUserInput] = useState("");

  const userInputChangeHandler = (e) => {
    setUserInput(e.target.value);
  };

  async function registrationHandler(event) {
    event.preventDefault();
    // fetch user input (state or refs)

    // optional: validate input
    // send valid data to API
    const response = await fetch("/api/newsletter", {
      method: "POST",
      body: JSON.stringify({ email: userInput }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
            value={userInput}
            onChange={userInputChangeHandler}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
