import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";

import AboutPage from "@/pages/about";
import GamePlayingPage from "@/pages/gamePlaying";
import GameSettingPage from "@/pages/gameSetting";
import GameResultPage from "@/pages/gameResult";
import GameJudgePage from "@/pages/gameJudge";
import { UserNameProvider } from "./hooks/UserNameContext";
import GameWatingPage from "./pages/gameWating";

function App() {
  return (
    <UserNameProvider>
      <Routes>
        <Route element={<IndexPage />} path="/" />
        <Route element={<AboutPage />} path="/about" />
        <Route path="/game"> 
          <Route path="setting" element={<GameSettingPage />} />
          <Route path="wait" element={<GameWatingPage />} />
          <Route path=":gameId">
            <Route path=":userId" element={<GamePlayingPage />} />
            <Route path="ei" element={<GameJudgePage />} />
            <Route path="result" element={<GameResultPage />} />
          </Route>
        </Route>
      </Routes>
    </UserNameProvider>
  );
}

export default App;
