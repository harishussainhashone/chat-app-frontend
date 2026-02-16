"use client";

import { Filter, Clock, MoreHorizontal } from "lucide-react";
import MessageBubble, { type ChatMessage } from "@/components/chat/MessageBubble";

const defaultMessages: ChatMessage[] = [
  {
    id: 1,
    sender: "system",
    name: "Mike",
    content: "Joined",
    time: "3 minutes ago",
    isJoin: true,
  },
  {
    id: 2,
    sender: "customer",
    name: "Mike",
    content: "Hello. I need help.",
    time: "3 minutes ago",
  },
  {
    id: 3,
    sender: "system",
    name: "Cindy",
    content: "Joined",
    time: "3 minutes ago",
    isJoin: true,
  },
  {
    id: 4,
    sender: "agent",
    name: "Cindy",
    content: "Hello there. How can I help you?",
    time: "3 minutes ago",
  },
  {
    id: 5,
    sender: "customer",
    name: "Mike",
    content: "I forgot my password!",
    time: "2 minutes ago",
  },
];

type ChatWindowProps = {
  chat?: {
    name?: string;
  };
};

export default function ChatWindow({ chat }: ChatWindowProps) {
  return (
    <div className="flex flex-col h-full">
      <div className="sticky top-0 z-10 bg-surface border-b flex justify-between border-gray-200 px-6 py-2">
        <div>
          <h2 className="font-semibold text-gray-600">
            Conversation with {chat?.name || "Customer"}
          </h2>
          <span className="text-gray-500 font-semibold text-[12px]">
            Via chat
          </span>
        </div>
        <div className="text-sm text-gray-600 mt-0.5 flex items-center gap-3">
          <div className="flex items-center gap-3 text-gray-500">
            <button className="p-1.5 rounded hover:bg-gray-100 hover:text-gray-700">
              <Filter size={16} />
            </button>
            <button className="p-1.5 rounded hover:bg-gray-100 hover:text-gray-700">
              <Clock size={16} />
            </button>
            <button className="p-1.5 rounded hover:bg-gray-100 hover:text-gray-700">
              <MoreHorizontal size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-7 no-scrollbar">
        {defaultMessages.map((message) => (
          <MessageBubble key={message.id} message={message} />
        ))}
      </div>

      <div className="border-t border-gray-200 bg-surface px-6 py-3 text-sm text-gray-600">
        <div className="flex flex-col justify-between">
          <div className="flex items-center gap-2">
            <span>Chat</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          <div className="my-2">
            View only. Only the assigned agent can join live conversation.
          </div>
        </div>
      </div>
    </div>
  );
}
