import {
  APPWRITE_ADDRESS,
  APPWRITE_CART,
  APPWRITE_DB,
  APPWRITE_FILE,
  APPWRITE_PROJECT_ID,
  APPWRITE_USER,
} from "@/constants/env";
import { IAppWriteConfig } from "@/types/appwrite";
import { DocumentPickerAsset } from "expo-document-picker";
import {
  Client,
  Account,
  ID,
  Databases,
  Avatars,
  Query,
  Storage,
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
const storage = new Storage(client);

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
    if (!session) {
      return;
    }
    console.log(session.$id);
    const profile = await getProfile();
    await database.updateDocument(
      appwriteConfig.dbId,
      appwriteConfig.userCollectionId,
      profile.documents[0].$id,
      { sessionId: session.$id },
    );
    return { session, profile };
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

export const getMe = async () => {
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
    return { userDetail, user };
  } catch (e: any) {
    console.log(e);
    throw new Error(e.message);
  }
};

export const uploadFile = async (file: DocumentPickerAsset) => {
  if (!file) return;
  const { mimeType, ...rest } = file;
  const asset = { type: mimeType, ...rest };
  try {
    const uploadedFile = await storage.createFile(
      appwriteConfig.storageCollectionId,
      ID.unique(),
      asset as any,
    );
    const url = await getFilePreview(uploadedFile.$id);
    return url;
  } catch {
    throw new Error("Upload file failed!");
  }
};

export const getFilePreview = async (fileId: string) => {
  try {
    const fileUrl = storage.getFilePreview(
      appwriteConfig.storageCollectionId,
      fileId,
    );
    if (!fileUrl) {
      throw new Error("File not found!");
    }
    return fileUrl.toString();
  } catch (e: any) {
    throw new Error(e.message);
  }
};

export const updateProfile = async (data: {
  email: string;
  avatar: string;
  name: string;
}) => {
  try {
    console.log(data)
    const profile = await getProfile();
    await database.updateDocument(
      appwriteConfig.dbId,
      appwriteConfig.userCollectionId,
      profile.documents[0].$id,
      data,
    );
  } catch (e: any) {
    console.log(e);
    throw new Error(e.message);
  }
};
