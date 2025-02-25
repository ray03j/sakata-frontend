"use client";

import { MessageType } from "@/types";
import { ChatCard } from "./chat-card";

type ChatListProps = {
  chatcards: MessageType[],
}

const user_id: string = import.meta.env.VITE_USER_ID!;

export const ChatList = ({chatcards}: ChatListProps) => {

  return (
    <div className="flex flex-col gap-2 w-full">
      {chatcards.map((chat: MessageType, id: number) => (
        <div
          key={id}
          className={`flex ${
            chat.userId===user_id ? "justify-end" : "justify-start"
          }`} 
        >
            <ChatCard message={chat.message} userId={chat.userId} />  
        </div>
      ))}
    </div>
  );
};
