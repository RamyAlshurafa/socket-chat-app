import React from "react";

export default ({ user, setSelectedUser, isOnline }) => {
  const onClick = () => {
    setSelectedUser(user);
  };
  return (
    <li className="clearfix">
      <button
        onClick={onClick}
        type="button"
        style={{ background: "none", border: "none", cursor: "pointer" }}
      >
        <img src={user.avatar} alt="avatar" />
        <div className="about">
          <div className="name">
            {user.firstName} {user.lastName}
          </div>
          <div className="status">
            <i className={`fa fa-circle ${isOnline ? "online" : "offline"}`}>
              {/* TODO : get last seen from backend */}
              {isOnline ? "online" : "left X min ago"}
            </i>
          </div>
        </div>
      </button>
    </li>
  );
};
