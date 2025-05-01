/** @jsxImportSource @emotion/react */
import { css, keyframes, SerializedStyles } from "@emotion/react";
import { FC, memo, useState, useEffect } from "react";
import { CHAT_LIST } from "../../../constants/chat-list";

const Chat: FC = memo(() => {
  const [chatStyle, setChatStyle] = useState<SerializedStyles>(close);
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    const startChatEffect = () => {
      for (let i = 0; i < CHAT_LIST.length; i++) {
        const setChat = () => {
          setMessage(CHAT_LIST[i]);
          setChatStyle(fadeInStyle);
        };

        const closeChat = () => {
          setChatStyle(fadeOutStyle);
        };

        setTimeout(() => {
          setChat();
          setTimeout(closeChat, 4000);
        }, i * 6000);
      }
    };

    setTimeout(startChatEffect, 3000);
  }, []);

  return (
    <div css={[chatWrapper, chatStyle]}>
      {message}
    </div>
  );
});

export default Chat;

const close = css`
  display: none;
`;

const chatWrapper = css`
  transform: translateX(-100%);
  background-color: rgb(131, 131, 131);
  color: #ffffff;
  border-radius: 20px;
  padding: 10px 15px;
  margin: 10px 0px;
  width: 300px;
  position: fixed;
  z-index: 100;
  bottom: 10%;
  left: 5%;
  opacity: 0;

  @media (max-width: 500px) {
    padding: 10px 15px;
    margin: 10px 0px;
    width: 80%;
  }
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    transform: translateX(-100%);
  }
`;

const fadeInStyle = css`
  animation: ${fadeIn} 1s ease-in-out forwards;
`;

const fadeOutStyle = css`
  opacity: 1;
  animation: ${fadeOut} 1s ease-in-out forwards;
`;