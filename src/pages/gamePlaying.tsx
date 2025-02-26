import { ChatInput } from "@/components/chat-input";
import { ChatList } from "@/components/chat-list";
import Timer from "@/components/timer";
import { useWebSocket } from "@/hooks/useWebSocket";
import DefaultLayout from "@/layouts/default";

export default function GamePlayingPage() {
  const {messages, sendMessage} = useWebSocket("ws://localhost:8080/ws");
  const theme = "エイくんが言いそうなこと"
  return (
    <DefaultLayout>
      <h1 className="fixed p-4 top-14 left-1/2 -translate-x-1/2 text-xl font-bold bg-white/80 backdrop-blur p-2 rounded-lg shadow-md">
        {theme}
        <Timer />
      </h1>

      <section className="flex flex-col items-start gap-4 py-8 md:py-10 max-w-xl mx-auto">
        <ChatList chatcards={messages} />
      </section>

      <div className="fixed bottom-10 left-0 w-full p-4 flex justify-center">
        <ChatInput sendMessage={sendMessage} />
      </div>
    </DefaultLayout>
  );
}
