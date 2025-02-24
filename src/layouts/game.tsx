import { Outlet, useParams } from "react-router-dom";

export default function GameLayout() {
  const { gameId } = useParams();
  return (
    <div>
      <h2>Game ID: {gameId}</h2>
      <Outlet /> {/* 子ルートのコンポーネントがここにレンダリングされる */}
    </div>
  );
}