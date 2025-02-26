import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";

import AboutPage from "@/pages/about";
import GamePlayingPage from "@/pages/gamePlaying";
import GameSettingPage from "@/pages/gameSetting";
import GameResultPage from "@/pages/gameResult";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<AboutPage />} path="/about" />
      <Route path="/game">
        <Route path=":gameId">
          <Route path=":userId" element={<GamePlayingPage />} />
          <Route path="result" element={<GameResultPage />} />
        </Route>
        <Route path="setting" element={<GameSettingPage />} />
      </Route>
    </Routes>
  );
}

export default App;
