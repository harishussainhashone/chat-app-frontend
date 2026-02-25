"use client";

import { useMemo, useState } from "react";
import HistoryToolbar from "@/components/history/HistoryToolbar";
import HistoryTable from "@/components/history/HistoryTable";
import HistoryDetailsPanel from "@/components/history/HistoryDetailsPanel";
import { historyRecords } from "@/features/history/history.logic";

export default function HistoryPageContent() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRecordId, setSelectedRecordId] = useState<string | null>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const filteredRecords = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();
    if (!normalizedSearch) return historyRecords;

    return historyRecords.filter((record) => {
      return (
        record.name.toLowerCase().includes(normalizedSearch) ||
        record.agent.toLowerCase().includes(normalizedSearch) ||
        record.id.toLowerCase().includes(normalizedSearch)
      );
    });
  }, [searchTerm]);

  const selectedRecord =
    filteredRecords.find((record) => record.id === selectedRecordId) ?? null;

  const showDetailsPanel = isDetailsOpen && selectedRecord !== null;

  const handleSelectRecord = (id: string) => {
    setSelectedRecordId(id);
    setIsDetailsOpen(true);
  };

  const handleCloseDetails = () => {
    setIsDetailsOpen(false);
  };

  const unreadCount = filteredRecords.filter((record) => record.unread).length;

  return (
    <section className="flex h-full min-h-0 flex-col overflow-hidden rounded-lg border border-gray-200 bg-surface">
      <HistoryToolbar
        searchTerm={searchTerm}
        onSearchTermChange={setSearchTerm}
        onClearSearch={() => setSearchTerm("")}
        unreadCount={unreadCount}
      />

      <div className="flex min-h-0 flex-1 flex-col xl:flex-row">
        <HistoryTable
          records={filteredRecords}
          selectedRecordId={showDetailsPanel ? selectedRecordId : null}
          onSelectRecord={handleSelectRecord}
          showMessagesColumn={!showDetailsPanel}
          isDetailsOpen={showDetailsPanel}
        />
        {showDetailsPanel && selectedRecord && (
          <HistoryDetailsPanel record={selectedRecord} onClose={handleCloseDetails} />
        )}
      </div>
    </section>
  );
}
