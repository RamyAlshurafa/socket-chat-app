import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "../Search";
import UserRow from "../UserRow";

const { CancelToken } = axios;

export default () => {
  const [users, setUsers] = useState([]);

  const fetUsers = async source => {
    try {
      const { data } = await axios.get("/api/users", {
        cancelToken: source.token,
      });
      setUsers(data);
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log("Request canceled");
      } else {
        console.log("error");
      }
    }
  };
  useEffect(() => {
    const source = CancelToken.source();
    fetUsers(source);
    return source.cancel;
  }, []);

  return (
    <div className="people-list" id="people-list">
      <Search />
      <ul className="list">
        {users.map(user => (
          <UserRow user={user} key={user.id} />
        ))}
      </ul>
    </div>
  );
};
