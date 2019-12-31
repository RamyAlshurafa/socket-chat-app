import React, { useState, useEffect, useCallback } from "react";

import axios from "axios";
import UsersList from "../../components/UsersList";
import ChatSection from "../../components/Chat";

const { CancelToken } = axios;

function Chat({ userInfo }) {
  const [selectedUser, setSelectedUser] = useState(null);

  const [users, setUsers] = useState([]);

  const fetchUsers = useCallback(
    async source => {
      try {
        const { data } = await axios.get("/api/users", {
          cancelToken: source.token,
        });
        setUsers(data.filter(freind => freind.id !== userInfo.id));
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Request canceled");
        } else {
          console.log("error", error);
        }
      }
    },
    [userInfo.id]
  );

  useEffect(() => {
    const source = CancelToken.source();
    fetchUsers(source);
    return source.cancel;
  }, [fetchUsers]);

  const toUser = selectedUser || users[0] || {};

  return (
    <div className="container clearfix">
      <UsersList setSelectedUser={setSelectedUser} users={users} />
      <ChatSection
        selectedUser={toUser}
        fromUserId={userInfo.id}
        toUserId={toUser.id}
        ToFirstName={toUser.firstName}
        FromFirstName={userInfo.firstName}
      />
    </div>
  );
}

export default Chat;
