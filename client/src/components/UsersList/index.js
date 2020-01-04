import React from "react";
import Search from "../Search";
import UserRow from "../UserRow";

export default ({ setSelectedUser, users, connectedUsersIds }) => {
  return (
    <div className="people-list" id="people-list">
      <Search />
      <ul className="list">
        {users.map(user => (
          <UserRow
            user={user}
            key={user.id}
            setSelectedUser={setSelectedUser}
            isOnline={connectedUsersIds.includes(user.id)}
          />
        ))}
      </ul>
    </div>
  );
};
