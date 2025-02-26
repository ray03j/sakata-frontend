"use client";

import { useState } from "react";
import DefaultLayout from "@/layouts/default";

export default function GameResultPage() {
  const [humanScore, setHumanScore] = useState(0);
  const [aiScore, setAiScore] = useState(0);

  const resultMessage = humanScore > aiScore ? "あなたの勝ち！" : humanScore < aiScore ? "AIの勝ち…" : "引き分け";
  const winnerColor = humanScore > aiScore ? "text-red-500" : humanScore < aiScore ? "text-blue-500" : "text-gray-500";

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="text-2xl font-bold">にんげん vs AI</div>
        <div className="flex gap-8 text-xl">
          <div>
            <p className="text-center">にんげん</p>
            <p className="text-center text-3xl font-bold">{humanScore}</p>
          </div>
          <div>
            <p className="text-center">AI</p>
            <p className="text-center text-3xl font-bold">{aiScore}</p>
          </div>
        </div>
        <p className={`mt-4 text-2xl font-bold ${winnerColor}`}>{resultMessage}</p>
      </section>
    </DefaultLayout>
  );
}
