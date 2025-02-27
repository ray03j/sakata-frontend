"use client";

import { ChatInput } from "@/components/chat-input";
import { ChatList } from "@/components/chat-list";
import { useWebSocket } from "@/hooks/useWebSocket";
import GameLayout from "@/layouts/game";
import { useThemeStore } from "@/store/useThemeStore";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // ✅ ここは OK

export default function GamePlayingPage() {
  const { messages, sendMessage } = useWebSocket("ws://localhost:8080/ws");
  const theme = useThemeStore((state) => state.theme);

  return (
    <GameLayout>
      <h1 className="fixed text-center p-4 top-14 left-1/2 -translate-x-1/2 text-xl font-bold bg-white/80 backdrop-blur p-2 rounded-lg shadow-md">
        {theme}
      </h1>

      <section className="flex flex-col items-start gap-4 py-8 md:py-10 max-w-xl mx-auto">
        <ChatList chatcards={messages} />
      </section>

      <div className="fixed bottom-10 left-0 w-full p-4 flex justify-center">
        <ChatInput sendMessage={sendMessage} />
      </div>
    </GameLayout>
  );
}
