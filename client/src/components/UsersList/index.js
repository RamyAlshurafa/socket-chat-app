import React, { useContext } from "react";
import Search from "../Search";
import UserRow from "../UserRow";

import { SocketContext } from "../../socket-context";

export default ({ setSelectedUser, users }) => {
  const { connectedUsersIds } = useContext(SocketContext);

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
