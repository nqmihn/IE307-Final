import { create } from "zustand";
interface IUser {
  email: string;
  name: string;
  avatarUrl: string;
}
interface UserState {
  isLogin: boolean;
  user: IUser;
  id: string;
  sessionId: string;
  login: (user: IUser, id: string, sessionId: string) => void;
  setUser: (user: IUser) => void;
  logout: () => void;
}
export const useUserStore = create<UserState>()((set) => ({
  isLogin: false,
  user: {
    avatarUrl: "",
    email: "",
    name: "",
  },
  id: "",
  sessionId: "",
  login: (user: IUser, id: string, sessionId: string) =>
    set((state) => ({
      isLogin: true,
      user: user,
      id: id,
      sessionId: sessionId,
    })),
  logout: () =>
    set((state) => ({
      isLogin: false,
      user: {
        avatarUrl: "",
        email: "",
        name: "",
      },
      id: "",
      sessionId: "",
    })),
  setUser: (user: IUser) =>
    set((state) => ({
      ...state,
      user: user,
    })),
}));
