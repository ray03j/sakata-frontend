"use client";

import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { useState } from "react";

export const ChatInput = ({ sendMessage }: { sendMessage: (message: string) => void }) => {
  const [input, setInput] = useState("");

  return (
    <div className="flex">
      <div>
        <Input
          labelPlacement="outside"
          placeholder="会話に参加してみよう！"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.ctrlKey && e.key === "Enter") {
              if (input.trim() === "") return;
              sendMessage(input)
              setInput("")
            }
          }}
        />
      </div>
      <div>
        <Button
          onPress={() => {
            sendMessage(input)
            setInput("")
          }}>
          Send!
        </Button>
      </div>
    </div>
  );
};
