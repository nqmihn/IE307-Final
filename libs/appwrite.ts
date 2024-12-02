import {
  APPWRITE_ADDRESS,
  APPWRITE_CART,
  APPWRITE_PROJECT_ID,
  APPWRITE_USER,
} from "@/constants/env";
import { IAppWriteConfig } from "@/types/appwrite";

export const appwriteConfig: IAppWriteConfig = {
  endpoint: "https://cloud.appwrite.io/v1",
  projectId: APPWRITE_PROJECT_ID,
  platform: "IE307 Final",
  userCollectionId: APPWRITE_USER,
  addressCollectionId: APPWRITE_ADDRESS,
  cartCollectionId: APPWRITE_CART,
};
