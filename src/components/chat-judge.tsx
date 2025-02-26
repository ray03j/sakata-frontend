"use client";

import { useState } from "react";
import { button as buttonStyles } from "@heroui/theme";

export default function ChatJudgeButtons() {
  const [selected, setSelected] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSelect = (choice: string | null) => {
    setLoading(true);
    setTimeout(() => {
      setSelected(choice);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="text-center p-4 text-xl font-bold bg-white/80 backdrop-blur p-2 rounded-lg shadow-md">
      <p className="mb-4">人 か マルチエージェント のどちらがよかったか選んでください</p>
      <div className="flex justify-center gap-4">
        <button
          className={buttonStyles({ color: "danger", radius: "full", variant: "shadow" })}
          onClick={() => handleSelect("human")}
          disabled={loading}
        >
          にんげん
        </button>
        <button
          className={buttonStyles({ color: "primary", radius: "full", variant: "shadow" })}
          onClick={() => handleSelect("AI")}
          disabled={loading}
        >
          AI
        </button>
      </div>
      {selected && <p className="mt-4">あなたは {selected} を選びました</p>}
    </div>
  );
}
