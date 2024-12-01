import { create } from "zustand";
interface UserState {
  isLogin: boolean;
  token: string;
  login: (token: string) => void;
  logout: () => void;
}
export const useUserStore = create<UserState>()((set) => ({
  isLogin: false,
  token: "",
  login: (token: string) => set((state) => ({ isLogin: true, token: token })),
  logout: () => set((state) => ({ isLogin: false, token: "" })),
}));
