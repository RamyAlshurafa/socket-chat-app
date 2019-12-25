import React from "react";

export default ({ user, setSelectedUser }) => {
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
            <i
              className={`fa fa-circle ${user.online ? "online" : "offline"}`}
            />
            {/* TODO : get last seen from backend */}
            {user.online ? "online" : "left X min ago"}`
          </div>
        </div>
      </button>
    </li>
  );
};
