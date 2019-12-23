import React from "react";

export default ({ user }) => {
  return (
    <li className="clearfix">
      <img src={user.avatar} alt="avatar" />
      <div className="about">
        <div className="name">
          {user.firstName} {user.lastName}
        </div>
        <div className="status">
          <i className={`fa fa-circle ${user.online ? "online" : "offline"}`} />
          {/* TODO : get last seen from backend */}
          {user.online ? "online" : "left X min ago"}`
        </div>
      </div>
    </li>
  );
};
