"use client";

import ChatsHeader from "@/components/chat/ChatsHeader";
import ChatsList from "@/components/chat/ChatsList";
import ActiveChatsList from "@/components/chat/ActiveChatsList";

export default function ChatsPage() {
  return (
    <div className="flex flex-1">
      <div className="flex-1 p-4 md:p-8 overflow-y-auto">
        <div className="max-w-7xl">
          <ChatsHeader />
          <ChatsList />
          <ActiveChatsList />
        </div>
      </div>
    </div>
  );
}
