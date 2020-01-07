import React, { useState } from "react";
import axios from "axios";

import Form from "../Form";
import Button from "../Button";

export default ({ fromUserId, toUserId, pushMessageToHistory }) => {
  const [message, setMessage] = useState("");

  const onSubmit = async event => {
    event.preventDefault();
    try {
      const { data: sentMessage } = await axios.post("/api/messages/", {
        from: fromUserId,
        to: toUserId,
        message,
      });

      setMessage("");

      pushMessageToHistory({
        ...sentMessage,
        fromId: fromUserId,
        toId: toUserId,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const onChange = event => {
    setMessage(event.target.value);
  };

  return (
    <Form onSubmit={onSubmit}>
      <div className="chat-message clearfix">
        <textarea
          name="message-to-send"
          id="message-to-send"
          placeholder="Type your message"
          rows="3"
          onChange={onChange}
          value={message}
        />
        <i className="fa fa-file-o" /> &nbsp;&nbsp;&nbsp;
        <i className="fa fa-file-image-o" />
        <Button type="submit">Send</Button>
      </div>
    </Form>
  );
};
