import React from "react";

import Header from "./Header";
import ChatHistory from "./ChatHistory";
import ChatMessageSendBox from "./ChatMessageSendBox";

export default ({
  selectedUser,
  fromUserId,
  toUserId,
  ToFirstName,
  FromFirstName,
}) => {
  return (
    <div className="chat">
      <Header user={selectedUser} />
      <ChatHistory
        fromUserId={fromUserId}
        toUserId={toUserId}
        ToFirstName={ToFirstName}
        FromFirstName={FromFirstName}
      />
      <ChatMessageSendBox fromUserId={fromUserId} toUserId={toUserId} />
    </div>
  );
};
