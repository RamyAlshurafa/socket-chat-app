import React from "react";

import Header from "./Header";
import ChatHistory from "./ChatHistory";
import ChatMessageSendBox from "./ChatMessageSendBox";

export default () => {
  return (
    <div className="chat">
      <Header />
      <ChatHistory />
      <ChatMessageSendBox />
    </div>
  );
};
