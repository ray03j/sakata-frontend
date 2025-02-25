import { ChatInput } from "@/components/chat-input";
import { ChatList } from "@/components/chat-list";
import DefaultLayout from "@/layouts/default";

export default function GamePlayingPage() {
  const chatcards = [
    {
      message: "こんにちは",
      isMe: true
    },
    {
      message: "さようなら",
      isMe: false
    }, 
  ]

  return (
    <DefaultLayout>
      <section className="flex flex-col items-start gap-4 py-8 md:py-10 max-w-xl mx-auto">
        <ChatList chatcards={chatcards} />
      </section>

      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 w-full max-w-xl bg-white p-4">
        <ChatInput />
      </div>
    </DefaultLayout>
  );
}
