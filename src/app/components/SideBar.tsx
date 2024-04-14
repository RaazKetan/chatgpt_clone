"use client";
import { useSession, signOut } from "next-auth/react";
import NewChat from "./NewChat";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../../../firebase";
import { collection, orderBy, query } from "firebase/firestore";
import ChatRow from "./ChatRow";
import ModalSelection from "./ModalSelection";

function SideBar() {
  const { data: session } = useSession();
  // console.log(session);
  const [chats, loading, error] = useCollection(
    session &&
      query(
        collection(db, "users", session.user?.email!, "chats"),
        orderBy("createdAt", "asc")
      )
  );

  // console.log(chats);
  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <div>
          {/* NewChat */}
          <NewChat />
          <div className="hidden sm:inline">
            <ModalSelection/>

          </div>
          {/* Map through the ChatRows */}
          {chats?.docs.map((chat) => (
            <ChatRow key={chat.id} id={chat.id} users={chat.data().users} />
          ))}
        </div>
      </div>
      {session && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={session.user.image}
          alt="Profile Picture"
          className="rounded-full h-12 w-12 cursor-pointer mx-auto mb-2 hover:opacity-50"
        />
      )}
      <button
        onClick={() => signOut()}
        className="bg-[#11A37F] text-white font-bold px-4 py-2 rounded">Sign Out</button>
    </div>
  );
}
export default SideBar;
