// app/visitors/[id]/components/ConversationTranscript.jsx
"use client";

import React from "react";
import { UserCircle, Filter, Clock, MoreHorizontal } from "lucide-react";

export default function ConversationTranscript({ visitor }) {
  // Mock conversation – later replace with real data from visitor or API
  const messages = [
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
      sender: "visitor",
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
      sender: "visitor",
      name: "Mike",
      content: "I forgot my password!",
      time: "2 minutes ago",
    },
  ];

  const getSenderClass = (sender) => {
    if (sender === "visitor") return "bg-white border border-gray-200";
    if (sender === "agent") return "bg-blue-50 border border-blue-100 ml-auto";
    return "text-center text-gray-500 text-xs italic";
  };

  return (
    <div className="flex flex-col h-full ">
      {/* Header / Conversation Info */}
      <div className="sticky top-0 z-10 bg-white border-b flex justify-between border-gray-200 px-6 py-2 ">
        <div>
          <h2 className="font-semibold text-gray-600">
            Conversation with {visitor?.name || "Visitor"}
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

{/* Messages */}
<div className="flex-1 overflow-y-auto px-4 py-4 space-y-7 no-scrollbar">
  {messages.map((msg) => (
    <div
      key={msg.id}
      className="flex items-start justify-between gap-4"
    >
      {/* Left: Avatar + content */}
      <div className="flex items-start gap-3">
        {/* Avatar */}
        <UserCircle className="text-gray-300" size={32} />

        {/* Text */}
        <div>
          <div className="text-sm font-medium text-gray-700">
            {msg.name} <span className="font-normal text-gray-500">via chat</span>
          </div>

          <div
            className={`text-sm ${
              msg.isJoin ? "text-gray-500" : "text-gray-800"
            }`}
          >
            {msg.content}
          </div>
        </div>
      </div>

      {/* Right: Time */}
      <div className="text-xs text-gray-400 whitespace-nowrap">
        {msg.time}
      </div>
    </div>
  ))}
</div>


      {/* Bottom Bar - View only notice */}
      <div className="border-t border-gray-200 bg-white px-6 py-3 text-sm text-gray-600">
        <div className="flex flex-col justify-between">
          <div className="flex items-center gap-2">
            <span>Chat</span>
            {/* Dropdown icon (chevron down) */}
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
