"use client";

import { useState } from "react";
import { HiArrowDownTray, HiUser, HiXMark } from "react-icons/hi2";
import type { HistoryRecord } from "@/features/history/history.logic";

type HistoryDetailsPanelProps = {
  record: HistoryRecord | null;
  onClose: () => void;
};

type DetailTab = "transcript" | "user-info";

function ReadonlyField({ value, placeholder }: { value: string; placeholder: string }) {
  return (
    <div className="rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-700">
      {value || <span className="text-gray-500">{placeholder}</span>}
    </div>
  );
}

export default function HistoryDetailsPanel({ record, onClose }: HistoryDetailsPanelProps) {
  const [activeTab, setActiveTab] = useState<DetailTab>("user-info");

  if (!record) {
    return null;
  }

  return (
    <div className="min-h-0 flex-1 overflow-y-auto bg-surface xl:w-[60%]">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-200 px-4 py-3 md:px-6">
        <div className="inline-flex overflow-hidden rounded-md border border-gray-300">
          <button
            type="button"
            onClick={() => setActiveTab("transcript")}
            className={`px-5 py-2 text-sm font-semibold transition-colors ${
              activeTab === "transcript"
                ? "bg-gray-100 text-gray-900"
                : "bg-surface text-gray-700 hover:bg-gray-50"
            }`}
          >
            Transcript
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("user-info")}
            className={`border-l border-gray-300 px-5 py-2 text-sm font-semibold transition-colors ${
              activeTab === "user-info"
                ? "bg-gray-100 text-gray-900"
                : "bg-surface text-gray-700 hover:bg-gray-50"
            }`}
          >
            User info
          </button>
        </div>

        <div className="flex items-center gap-2">
          {activeTab === "transcript" ? (
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 text-gray-600 transition-colors hover:bg-gray-50"
              aria-label="Download transcript"
              title="Download transcript"
            >
              <HiArrowDownTray className="h-5 w-5" />
            </button>
          ) : (
            <button
              type="button"
              className="rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-red-700"
            >
              Ban visitor
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-500 transition-colors hover:bg-gray-50"
            aria-label="Close panel"
          >
            <HiXMark className="h-5 w-5" />
          </button>
        </div>
      </div>

      {activeTab === "transcript" ? (
        <div className="space-y-4 p-4 md:p-6">
          <div className="grid max-w-md grid-cols-[96px_1fr] gap-y-1 text-sm">
            <span className="text-gray-600">Rating</span>
            <span className="text-gray-700">-</span>
            <span className="text-gray-600">Comment</span>
            <span className="text-gray-700">-</span>
            <span className="text-gray-600">Tags</span>
            <span className="text-gray-700">-</span>
          </div>

          <div className="space-y-3 border-y border-dashed border-gray-300 py-3">
            <div className="grid grid-cols-[1fr_auto] items-center gap-3 text-sm">
              <p className="text-center italic text-gray-500">
                {record.agent} has joined.
              </p>
              <span className="text-gray-600">2:32 AM</span>
            </div>
            <div className="grid grid-cols-[1fr_auto] items-center gap-3 text-sm">
              <p className="text-center italic text-gray-500">
                Visitor {record.id} has joined.
              </p>
              <span className="text-gray-600">2:32 AM</span>
            </div>
          </div>

          <div className="space-y-1 text-sm text-gray-700">
            <div className="grid grid-cols-[1fr_auto] items-start gap-3">
              <div>
                <p className="font-semibold text-gray-900">{record.agent}</p>
                <p className="mt-2">Hello there</p>
                <p>How are you?</p>
              </div>
              <span className="text-gray-600">2:32 AM</span>
            </div>
          </div>

          <div className="grid grid-cols-[1fr_auto] items-center gap-3 border-t border-dashed border-gray-300 pt-3 text-sm">
            <p className="text-center italic text-gray-500">
              Visitor {record.id} has left.
            </p>
            <span className="text-gray-600">2:32 AM</span>
          </div>
        </div>
      ) : (
        <div className="space-y-3 p-4 md:p-6">
          <div className="flex items-start gap-3">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-md bg-lime-400 text-white">
              <HiUser className="h-10 w-10" />
            </div>
            <div className="grid flex-1 gap-2">
              <ReadonlyField value={record.visitorInfo.name} placeholder="Add name" />
              <ReadonlyField value={record.visitorInfo.email} placeholder="Add email" />
            </div>
          </div>

          <ReadonlyField value={record.visitorInfo.phone} placeholder="Add phone number" />

          <div className="rounded-md border border-gray-300 p-3 text-sm text-gray-700">
            {record.visitorInfo.notes || (
              <span className="text-gray-500">Add visitor notes</span>
            )}
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            <div className="rounded-md border border-gray-300 p-3">
              <div className="text-3xl font-semibold text-gray-900">
                {record.visitorInfo.pastVisits}
              </div>
              <div className="text-sm text-gray-700">Past visits</div>
            </div>
            <div className="rounded-md border border-gray-300 p-3">
              <div className="text-3xl font-semibold text-gray-900">
                {record.visitorInfo.pastChats}
              </div>
              <div className="text-sm text-gray-700">Past chats</div>
            </div>
          </div>

          <div className="rounded-md border border-gray-300 p-3">
            <h3 className="mb-2 text-sm font-semibold text-gray-900">Visitor path</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              {record.visitorInfo.visitorPath.map((pathItem) => (
                <li key={pathItem} className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-gray-400" />
                  <span>{pathItem}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-md border border-gray-300 p-3">
            <h3 className="mb-2 text-sm font-semibold text-gray-900">Location</h3>
            <p className="mb-3 text-sm text-gray-700">{record.visitorInfo.location}</p>
            <h3 className="mb-2 text-sm font-semibold text-gray-900">Browser</h3>
            <p className="mb-3 text-sm text-gray-700">{record.visitorInfo.browser}</p>
            <h3 className="mb-2 text-sm font-semibold text-gray-900">Platform</h3>
            <p className="text-sm text-gray-700">{record.visitorInfo.platform}</p>
          </div>
        </div>
      )}
    </div>
  );
}
