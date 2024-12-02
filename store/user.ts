import { create } from "zustand";
interface UserState {
  isLogin: boolean;
  email: string;
  id: string;
  sessionId: string;
  login: (email: string, id: string, sessionId: string) => void;
  logout: () => void;
}
export const useUserStore = create<UserState>()((set) => ({
  isLogin: false,
  email: "",
  id: "",
  sessionId: "",
  login: (email: string, id: string, sessionId: string) =>
    set((state) => ({
      isLogin: true,
      email: email,
      id: id,
      sessionId: sessionId,
    })),
  logout: () =>
    set((state) => ({ isLogin: false, email: "", id: "", sessionId: "" })),
}));
