import { MessageType } from "@/types";
import { useEffect, useRef, useState } from "react";

export const useWebSocket = (url: string) => {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const ws = useRef<WebSocket | null>(null);
  const user_id: string = import.meta.env.VITE_USER_ID!;

  useEffect(() => {
    ws.current = new WebSocket(url);

    ws.current.onopen = () => console.log("✅ WebSocket 接続成功");
    ws.current.onmessage = (event) => {
      console.log("📩 受信:", event.data);
      try {
        const receivedMessage = JSON.parse(event.data);

        if (
          typeof receivedMessage.text === "string" &&
          typeof receivedMessage.userId === "string" &&
          typeof receivedMessage.isDamage === "boolean"
        ) {
          setMessages((prev) => [
            ...prev,
            {
              userId: receivedMessage.userId,
              userName: receivedMessage.userName,
              message: receivedMessage.text,
            },
          ]);
        } else {
          console.warn("⚠️ 不正なメッセージ形式:", receivedMessage);
        }
      } catch (error) {
        console.error("❌ JSON パースエラー:", error);
      }
    };
    ws.current.onerror = (error) =>
      console.error("❌ WebSocket エラー:", error);
    ws.current.onclose = () => console.log("🔌 WebSocket 切断");

    return () => ws.current?.close();
  }, [url]);

  const sendMessage = (text: string) => {
    if (ws.current?.readyState === WebSocket.OPEN) {
      const newMessage = { text };
      ws.current.send(JSON.stringify(newMessage));
      setMessages((prev) => [
        ...prev,
        { userId: "a", userName: "エイ", message: text },
      ]);
    }
  };

  return { messages, sendMessage };
};
