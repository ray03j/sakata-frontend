"use client";

import { useEffect, useState } from "react";
import { button as buttonStyles } from "@heroui/theme";
import { useParams } from "react-router-dom";

export default function ChatJudgeButtons() {
  const { gameId } = useParams<{ gameId: string }>();

  const [gameData, setGameData] = useState({ humanScore: 0, aiScore: 0 });

  useEffect(() => {
    if (!gameId) {
      console.error("gameId が未定義");
      return;
    }

    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:8085/game/${gameId}`);
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);

        const data = await res.json();
        setGameData({ humanScore: data.humanScore, aiScore: data.aiScore });
        console.log("スコア取得成功:", data);
      } catch (err) {
        console.error("スコアの取得に失敗しました", err);
      }
    };

    fetchData();
  }, [gameId]);

  const handleSelect = async (choice: string) => {
    if (!gameId) return;

    const updatedScores = {
      humanScore: choice === "human" ? gameData.humanScore + 1 : gameData.humanScore,
      aiScore: choice === "AI" ? gameData.aiScore + 1 : gameData.aiScore,
    };

    try {
      const updateRes = await fetch(`http://localhost:8085/game/${gameId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedScores),
      });

      if (!updateRes.ok) throw new Error(`Failed to update game: ${updateRes.statusText}`);

      setGameData(updatedScores); // スコアを更新
      console.log(`スコア更新: ${JSON.stringify(updatedScores)}`);
    } catch (error) {
      console.error("スコア更新エラー:", error);
    }
  };

  return (
    <div className="text-center p-4 text-xl font-bold bg-white/80 backdrop-blur p-2 rounded-lg shadow-md">
      <p className="mb-4">人 か マルチエージェント のどちらがよかったか選んでください</p>
      <div className="flex justify-center gap-4">
        <button
          className={buttonStyles({ color: "danger", radius: "full", variant: "shadow" })}
          onClick={() => handleSelect("human")}
        >
          にんげん
        </button>
        <button
          className={buttonStyles({ color: "primary", radius: "full", variant: "shadow" })}
          onClick={() => handleSelect("AI")}
        >
          AI
        </button>
      </div>
      <p className="mt-4">現在のスコア - 人間: {gameData.humanScore} | AI: {gameData.aiScore}</p>
    </div>
  );
}
