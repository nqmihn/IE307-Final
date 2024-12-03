import { getMe } from "@/libs/appwrite";
import { useUserStore } from "@/store/user";
import { useEffect } from "react";

const GetMeComponent = () => {
  const userStore = useUserStore();
  const updateMe = async () => {
    try {
      if (!userStore.isLogin) {
        const res = await getMe();
        userStore.login(
          {
            email: res.userDetail.documents[0].email,
            avatarUrl: res.userDetail.documents[0].avatar,
            name: res.userDetail.documents[0].name,
          },
          res.user.$id,
          res.userDetail.documents[0].sessionId,
        );
      }
    } catch (e: any) {
      userStore.logout();
    }
  };
  useEffect(() => {
    updateMe();
  }, []);
  return null;
};

export default GetMeComponent;
