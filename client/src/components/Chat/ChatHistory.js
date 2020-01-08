import React from "react";

import Message from "./Message";

export default ({ fromUserId, ToFirstName, FromFirstName, messages }) => {
  return (
    <div className="chat-history" id="chat-history">
      <ul>
        {messages.map(message => (
          <Message
            sent={message.fromId === fromUserId}
            createdAt={message.createdAt}
            body={message.body}
            FromFirstName={FromFirstName}
            ToFirstName={ToFirstName}
            key={message.id}
          />
        ))}
      </ul>
    </div>
  );
};
