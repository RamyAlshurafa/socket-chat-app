import React, { useState, useEffect, useCallback, useContext } from "react";

import axios from "axios";
import UsersList from "../../components/UsersList";
import ChatSection from "../../components/Chat";
import { UserContext } from "../../user-context";

const { CancelToken } = axios;

function Chat() {
  const [selectedUser, setSelectedUser] = useState(null);

  const [users, setUsers] = useState([]);

  const { userInfo } = useContext(UserContext);

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

  const toUser =
    selectedUser || users.filter(({ id }) => id !== userInfo.id)[0] || {};

  return (
    <div className="container clearfix">
      <UsersList
        setSelectedUser={setSelectedUser}
        users={users}
        connectedUsersIds={[]}
      />
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
