import React, { useState, useEffect } from "react";

import axios from "axios";
import UsersList from "../../components/UsersList";
import ChatSection from "../../components/Chat";

const { CancelToken } = axios;

function Chat({ userInfo }) {
  const [selectedUser, setSelectedUser] = useState(null);

  const [users, setUsers] = useState([]);

  const fetUsers = async source => {
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
  };
  useEffect(() => {
    const source = CancelToken.source();
    fetUsers(source);
    return source.cancel;
  }, []);

  return (
    <div className="container clearfix">
      <UsersList setSelectedUser={setSelectedUser} users={users} />
      <ChatSection selectedUser={selectedUser || users[0] || {}} />
    </div>
  );
}

export default Chat;
