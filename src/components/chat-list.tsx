"use client";

import { ChatCard, ChatCardProps } from "./chat-card";

type ChatListProps = {
  chatcards: ChatCardProps[],
}

export const ChatList = ({chatcards}: ChatListProps) => {

  return (
    <>
      {chatcards.map((chat: ChatCardProps, id: number) => (
        <div key={id}>
          <ChatCard message={chat.message} isMe={chat.isMe} />
        </div>
      ))}
    </>
  );
};
