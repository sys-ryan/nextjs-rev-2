import { useContext, useEffect, useState } from "react";

import CommentList from "./comment-list";
import NewComment from "./new-comment";
import classes from "./comments.module.css";
import NotificationContext from "../../store/notification-context";

function Comments(props) {
  const notificationCtx = useContext(NotificationContext);

  const { eventId } = props;

  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);
  const [isFetchingComments, setIsFetchingComments] = useState(false);

  useEffect(() => {
    const getComments = async () => {
      setIsFetchingComments(true);
      const response = await fetch(`/api/comments/${eventId}`);
      const data = await response.json();
      setComments(data.comments);
      setIsFetchingComments(false);
    };

    if (showComments) {
      getComments();
    }
  }, [showComments]);

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  async function addCommentHandler(commentData) {
    notificationCtx.showNotification({
      title: "Sending comment...",
      message: "Registering for your comment",
      status: "pending",
    });
    // send data to API

    try {
      const response = await fetch(`/api/comments/${props.eventId}`, {
        method: "POST",
        body: JSON.stringify(commentData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong.");
      }

      notificationCtx.showNotification({
        title: "Success!",
        message: "Your comment was saved!",
        status: "success",
      });
    } catch (error) {
      notificationCtx.showNotification({
        title: "Error!",
        message: error.message || "Something went wrong!",
        status: "error",
      });
    }
  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>{showComments ? "Hide" : "Show"} Comments</button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && !isFetchingComments && <CommentList items={comments} />}
      {showComments && isFetchingComments && <p>Loading... </p>}
    </section>
  );
}

export default Comments;
