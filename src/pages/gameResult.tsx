"use client";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DefaultLayout from "@/layouts/default";

export default function ChatJudgeButtons() {
  const { gameId } = useParams<{ gameId: string }>();
  const [humanScore, setHumanScore] = useState(0);
  const [aiScore, setAiScore] = useState(0);
  const resultMessage =
    humanScore > aiScore
      ? "あなたの勝ち！"
      : humanScore < aiScore
        ? "AIの勝ち…"
        : "引き分け";
  const winnerColor =
    humanScore > aiScore
      ? "text-red-500"
      : humanScore < aiScore
        ? "text-blue-500"
        : "text-gray-500";

  useEffect(() => {
    if (!gameId) return;

    fetch(`http://localhost:8085/game/${gameId}`)
      .then((res) => res.json())
      .then((data) => {
        setAiScore(data.aiScore);
        setHumanScore(data.humanScore);
      })
      .catch((err) => {
        console.error("スコアの取得に失敗しました", err);
      });
  }, [gameId]);

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
        <p className={`mt-4 text-2xl font-bold ${winnerColor}`}>
          {resultMessage}
        </p>
      </section>
    </DefaultLayout>
  );
}
