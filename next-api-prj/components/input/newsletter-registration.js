import { useState, useContext } from "react";
import NotificationContext from "../../store/notification-context";
import classes from "./newsletter-registration.module.css";

function NewsletterRegistration() {
  const notificationCtx = useContext(NotificationContext);

  const [userInput, setUserInput] = useState("");

  const userInputChangeHandler = (e) => {
    setUserInput(e.target.value);
  };

  async function registrationHandler(event) {
    event.preventDefault();

    notificationCtx.showNotification({
      title: "Signing up...",
      message: "Registering for newsletter",
      status: "pending",
    });
    // fetch user input (state or refs)
    // optional: validate input
    // send valid data to API
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        body: JSON.stringify({ email: userInput }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong.");
      }

      console.log(data);

      notificationCtx.showNotification({
        title: "Success!",
        message: "Successfully registered for newsletter!",
        status: "success",
      });
    } catch (error) {
      notificationCtx.showNotification({
        title: "Error",
        message: error.message || "Something went wrong.",
        status: "error",
      });
    }
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
