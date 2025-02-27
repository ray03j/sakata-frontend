"use client";

import { MessageType } from "@/types";
import { ChatCard } from "./chat-card";

type ChatListProps = {
  chatcards: MessageType[],
}

export const ChatList = ({chatcards}: ChatListProps) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      {chatcards.map((chat: MessageType, id: number) => (
        <div
          key={id}
          className={`flex ${
            chat.userName==="AI" ? "justify-start" : "justify-end"
          }`} 
        >
          <ChatCard message={chat.message} userName={chat.userName} />  
        </div>
      ))}
    </div>
  );
};
