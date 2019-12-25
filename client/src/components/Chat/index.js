import React from "react";

import Header from "./Header";
import ChatHistory from "./ChatHistory";
import ChatMessageSendBox from "./ChatMessageSendBox";

export default ({ selectedUser }) => {
  return (
    <div className="chat">
      <Header user={selectedUser} />
      <ChatHistory />
      <ChatMessageSendBox />
    </div>
  );
};
