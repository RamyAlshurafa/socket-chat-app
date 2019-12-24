import React from "react";

import UsersList from "../../components/UsersList";
import ChatSection from "../../components/Chat";

function Chat() {
  return (
    <div className="container clearfix">
      <UsersList />
      <ChatSection />
    </div>
  );
}

export default Chat;
