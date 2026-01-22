"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";

import { visitors } from "../../../data/visitors";
import VisitorDetails from "./components/VisitorDetails";
import VisitorsTabBar from "./components/VisitorsTabBar";
import VisitorRightSection from "./components/VisitorRightSection";
import VisitorLeftSection from "./components/VisitorLeftSection";
import ConversationTranscript from "./components/ConversationTranscript";

export default function VisitorDetailPage() {
  const params = useParams();
  const visitorId = parseInt(params.id, 10);
  const visitor = visitors.find(v => v.id === visitorId);
  const [activeTab, setActiveTab] = useState(2);

  if (!visitor) return <div>Visitor not found</div>;

  return (
    <div className="h-screen flex flex-col">
      {/* ===== TOP FIXED / STICKY TAB BAR ===== */}
      <div className="sticky top-0 z-40 bg-gray-100 border-b border-gray-200">
        <VisitorsTabBar
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
      </div>

      {/* ===== PAGE BODY ===== */}
      <div className="flex flex-1 overflow-hidden">
        {/* LEFT ASIDE */}
        <aside className="hidden lg:block w-65 border-r border-gray-200 overflow-y-auto no-scrollbar">
          <VisitorLeftSection />
        </aside>

       {/* CENTER → CONVERSATION */}
        <main className="flex-1 overflow-y-auto bg-gray-50 no-scrollbar">
          <ConversationTranscript visitor={visitor} />
        </main>
        <aside className="hidden xl:block w-80  border-l border-gray-200 overflow-y-auto no-scrollbar">
          <VisitorRightSection />
        </aside>
      </div>
    </div>
  );
}
