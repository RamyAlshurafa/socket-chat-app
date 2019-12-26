import React, { useEffect, useState } from "react";
import axios from "axios";

import Message from "./Message";

const { CancelToken } = axios;

export default ({ fromUserId, toUserId, ToFirstName, FromFirstName }) => {
  const [messages, setMessages] = useState([]);
  const fetchMessages = async ({ fromId, toId, source }) => {
    try {
      const { data } = await axios.get("/api/messages/private", {
        params: {
          fromId,
          toId,
        },
        cancelToken: source.token,
      });
      setMessages(data);
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log("Request canceled");
      } else {
        console.log("error", error);
      }
    }
  };
  useEffect(() => {
    const source = CancelToken.source();

    fetchMessages({ fromId: fromUserId, toId: toUserId, source });
  }, [fromUserId, toUserId]);

  return (
    <div className="chat-history">
      <ul>
        {messages.map(message => (
          <Message
            sent={message.fromId === fromUserId}
            createdAt={message.createdAt}
            body={message.body}
            FromFirstName={FromFirstName}
            ToFirstName={ToFirstName}
          />
        ))}
      </ul>
    </div>
  );
};
