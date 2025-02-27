import { create } from "zustand";

type State = {
  time: string;
};

type Action = {
  setTime: (time: string) => void;
};

export const useTimer = create<State & Action>((set) => ({
  time: "",
  setTime: (time) => set(() => ({ time })),
}));
