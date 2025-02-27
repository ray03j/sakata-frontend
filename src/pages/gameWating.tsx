"use client";

import DefaultLayout from "@/layouts/default";
import { motion } from "framer-motion";
import { useWebSocketStore } from "@/store/useWebSocketStore";
import { useEffect, useRef } from "react";
import ReconnectingWebSocket from "reconnecting-websocket";

export default function GameWaitingPage() {
  const setWebSocketRef = useWebSocketStore((state) => state.setWebSocketRef);
  const socketRef = useRef<ReconnectingWebSocket>();

  useEffect(() => {
    const websocket = new ReconnectingWebSocket("ws://localhost:8000/ws");
    socketRef.current = websocket;
    setWebSocketRef(socketRef);
    const onMessage = (event: MessageEvent) => {
      console.log("📩 受信:", event.data);
    };

    websocket.addEventListener("message", onMessage);

    return () => {
      websocket.close();
      websocket.removeEventListener("message", onMessage);
    };
  }, []);

  return (
    <DefaultLayout>
      <div className="flex flex-col items-center justify-center min-h-screen text-white">
        <h1 className="text-2xl font-bold mb-4 text-black">
          ゲーム開始待機中...
        </h1>

        {/* ローディングアニメーション */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full mb-4"
        />
      </div>
    </DefaultLayout>
  );
}
