"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { chats } from "@/features/chats/chats.logic";
import ChatsTabBar from "@/components/chat/ChatsTabBar";
import ChatRightSection from "@/components/chat/ChatRightSection";
import ChatLeftSection from "@/components/chat/ChatLeftSection";
import ChatWindow from "@/components/chat/ChatWindow";

export default function ChatDetailPage() {
  const params = useParams();
  const rawId = Array.isArray(params?.chatId) ? params.chatId[0] : params?.chatId;
  const chatId = Number(rawId);
  const chat = chats.find((item) => item.id === chatId);
  const [activeTab, setActiveTab] = useState(2);

  if (!chat) return <div>Chat not found</div>;

  return (
    <div className="h-screen flex flex-col">
      <div className="sticky top-0 z-40 bg-gray-100 border-b border-gray-200">
        <ChatsTabBar activeTab={activeTab} onTabChange={setActiveTab} />
      </div>

      <div className="flex flex-1 overflow-hidden">
        <aside className="hidden lg:block w-65 border-r border-gray-200 overflow-y-auto no-scrollbar">
          <ChatLeftSection />
        </aside>

        <main className="flex-1 overflow-y-auto bg-gray-50 no-scrollbar">
          <ChatWindow chat={chat} />
        </main>
        <aside className="hidden xl:block w-80 border-l border-gray-200 overflow-y-auto no-scrollbar">
          <ChatRightSection />
        </aside>
      </div>
    </div>
  );
}
