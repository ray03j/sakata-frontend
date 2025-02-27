import { create } from "zustand";

type State = {
  theme: string;
};

type Action = {
  setTheme: (theme: string) => void;
};

export const useThemeStore = create<State & Action>((set) => ({
  theme: "",
  setTheme: (theme) => set(() => ({ theme })),
}));
