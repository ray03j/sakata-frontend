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
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <ChatList chatcards={chatcards} />

        <div className="w-md items-center justify-center">
          <ChatInput />
        </div>
      </section>
    </DefaultLayout>
  );
}
