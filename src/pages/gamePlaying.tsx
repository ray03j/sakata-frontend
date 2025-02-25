import { ChatInput } from "@/components/chat-input";
import { ChatList } from "@/components/chat-list";
import { useWebSocket } from "@/hooks/useWebSocket";
import DefaultLayout from "@/layouts/default";

export default function GamePlayingPage() {
  const {messages, sendMessage} = useWebSocket("ws://localhost:8080/ws");
  
  return (
    <DefaultLayout>
      <section className="flex flex-col items-start gap-4 py-8 md:py-10 max-w-xl mx-auto">
        <ChatList chatcards={messages} />
      </section>

      <div className="fixed bottom-10 left-0 w-full p-4 flex justify-center">
        <ChatInput sendMessage={sendMessage} />
      </div>
    </DefaultLayout>
  );
}
