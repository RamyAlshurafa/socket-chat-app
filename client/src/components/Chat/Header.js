import React from "react";

export default ({ user }) => {
  return (
    <div className="chat-header clearfix">
      <img src={user.avatar} alt="avatar" />

      <div className="chat-about">
        <div className="chat-with">
          Chat with {user.firstName} {user.lastName}
        </div>
        <div className="chat-num-messages">already 1 902 messages</div>
      </div>
      <i className="fa fa-star" />
    </div>
  );
};
