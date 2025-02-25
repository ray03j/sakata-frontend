"use client";

import { ChatCard, ChatCardProps } from "./chat-card";

type ChatListProps = {
  chatcards: ChatCardProps[],
}

export const ChatList = ({chatcards}: ChatListProps) => {

  return (
    <div className="flex flex-col gap-2 w-full">
      {chatcards.map((chat: ChatCardProps, id: number) => (
        <div
            key={id}
          className={`flex ${
            chat.isMe ? "justify-start" : "justify-end"
          }`}
        >
            <ChatCard message={chat.message} isMe={chat.isMe} />
        </div>
      ))}
    </div>
  );
};
