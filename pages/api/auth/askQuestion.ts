import { query } from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";
import admin from "firebase-admin";
import { adminDb } from "../../../firebaseAdmin";

type Data = {
  answer: string;
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { prompt, chatId, model, session } = req.body;
  if (!prompt ) {
    res.status(400).json({ answer: "Please provide a prompt" });
    return;
  }
  if (!chatId) {
    res.status(400).json({ answer: "Please provide a chatId" });
    return;
  }

  //chatGpt Query
  const response = query(prompt, chatId, model);
  const message: Message = {
    text: response|| "ChatGpt was unable to respond to your query.",
    createdAt: admin.firestore.Timestamp.now(),
    user: {
      _id: "ChatGpt",
      name: "ChatGpt",
      avatar: "https://links.papareact.com/89k",
    },
  };
  await adminDb
    .collection("users")
    .doc(session?.user?.email)
    .collection("chats")
    .doc(chatId)
    .collection("messages")
    .add(message);

  res.status(200).json({ answer: message.text});
}
