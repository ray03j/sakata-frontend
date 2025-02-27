import { create } from "zustand";
import ReconnectingWebSocket from "reconnecting-websocket";
import { MutableRefObject } from "react";

type State = {
  socketRef: MutableRefObject<ReconnectingWebSocket | undefined> | null;
};

type Action = {
  setWebSocketRef: (
    ref: MutableRefObject<ReconnectingWebSocket | undefined>
  ) => void;
};

export const useWebSocketStore = create<State & Action>()((set) => ({
  socketRef: null,
  setWebSocketRef: (ref) => set(() => ({ socketRef: ref })),
}));
