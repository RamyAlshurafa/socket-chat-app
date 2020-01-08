import React, { useEffect, useState, useContext, useCallback } from "react";

import axios from "axios";

import { notification } from "antd";
import Header from "./Header";
import ChatHistory from "./ChatHistory";
import ChatMessageSendBox from "./ChatMessageSendBox";
import { SocketContext } from "../../socket-context";

const { CancelToken } = axios;

export default ({
  selectedUser,
  fromUserId,
  toUserId,
  ToFirstName,
  FromFirstName,
}) => {
  const [messages, setMessages] = useState([]);
  const { newMessage, setNewMessage } = useContext(SocketContext);

  const scrollToTheBottomOfChat = useCallback(() => {
    const chatDiv = document.getElementById("chat-history");
    chatDiv.scrollTop = chatDiv.scrollHeight;
  }, []);

  const fetchMessages = useCallback(
    async ({ fromId, toId, source }) => {
      try {
        const { data } = await axios.get("/api/messages/private", {
          params: {
            fromId,
            toId,
          },
          cancelToken: source.token,
        });
        setMessages(data);
        scrollToTheBottomOfChat();
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Request canceled");
        } else {
          console.log("error", error);
        }
      }
    },
    [scrollToTheBottomOfChat]
  );

  useEffect(() => {
    const source = CancelToken.source();

    fetchMessages({ fromId: fromUserId, toId: toUserId, source });
  }, [fetchMessages, fromUserId, toUserId]);

  const pushMessageToHistory = useCallback(
    message => {
      setMessages([...messages, message]);
    },
    [messages]
  );

  useEffect(() => {
    if (newMessage) {
      if (newMessage.fromId === selectedUser.id) {
        pushMessageToHistory(newMessage);
        setNewMessage(null);
        scrollToTheBottomOfChat();
      } else {
        notification.open({
          message: (
            <div>
              <span style={{ fontWeight: 700 }}>
                {newMessage.firstName} {newMessage.lastName}
              </span>{" "}
              sent you a new message
            </div>
          ),
          description: newMessage.body,
        });
      }
    }
  }, [
    newMessage,
    pushMessageToHistory,
    scrollToTheBottomOfChat,
    selectedUser.id,
    setNewMessage,
  ]);

  return (
    <div className="chat">
      <Header user={selectedUser} />
      <ChatHistory
        fromUserId={fromUserId}
        ToFirstName={ToFirstName}
        FromFirstName={FromFirstName}
        messages={messages}
        pushMessageToHistory={pushMessageToHistory}
      />
      <ChatMessageSendBox
        fromUserId={fromUserId}
        toUserId={toUserId}
        pushMessageToHistory={pushMessageToHistory}
      />
    </div>
  );
};
