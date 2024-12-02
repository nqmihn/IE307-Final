import {
  APPWRITE_ADDRESS,
  APPWRITE_CART,
  APPWRITE_DB,
  APPWRITE_FILE,
  APPWRITE_PROJECT_ID,
  APPWRITE_USER,
} from "@/constants/env";
import { IAppWriteConfig } from "@/types/appwrite";
import {
  Client,
  Account,
  ID,
  Databases,
  Avatars,
  Query,
} from "react-native-appwrite";

export const appwriteConfig: IAppWriteConfig = {
  endpoint: "https://cloud.appwrite.io/v1",
  projectId: APPWRITE_PROJECT_ID,
  platform: "ie307.final.android",
  userCollectionId: APPWRITE_USER,
  addressCollectionId: APPWRITE_ADDRESS,
  cartCollectionId: APPWRITE_CART,
  storageCollectionId: APPWRITE_FILE,
  dbId: APPWRITE_DB,
};

const client = new Client();

client
  .setEndpoint(appwriteConfig.endpoint)
  .setPlatform(appwriteConfig.platform)
  .setProject(appwriteConfig.projectId);

const account = new Account(client);
const database = new Databases(client);
const avatar = new Avatars(client);

export const createUser = async (
  email: string,
  password: string,
  name: string,
) => {
  try {
    const newAccount = await account.create(ID.unique(), email, password, name);
    if (!newAccount) {
      throw new Error("Email has been used!");
    }
    const avatarUrl = avatar.getInitials(email);
    const newUser = await database.createDocument(
      appwriteConfig.dbId,
      appwriteConfig.userCollectionId,
      ID.unique(),
      { name, email, avatar: avatarUrl, accountId: newAccount.$id },
    );
    return await signIn(email, password);
  } catch (e: any) {
    console.log(e);
    throw new Error(e.message);
  }
};

export const signIn = async (email: string, password: string) => {
  try {
    const session = await account.createEmailPasswordSession(email, password);
    console.log(session);
    if (!session) {
      return;
    }
    return session;
  } catch (e: any) {
    console.log(e);
    throw new Error(e.message);
  }
};
export const logout = async (sessionId: string) => {
  await account.deleteSession(sessionId);
};

export const getProfile = async () => {
  try {
    const user = await account.get();
    if (!user) {
      throw new Error("User not found!");
    }
    const userDetail = await database.listDocuments(
      appwriteConfig.dbId,
      appwriteConfig.userCollectionId,
      [Query.equal("accountId", user.$id)],
    );
    return userDetail;
  } catch (e: any) {
    console.log(e);
    throw new Error(e.message);
  }
};
