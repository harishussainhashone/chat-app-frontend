import HistoryPageContent from "@/components/history/HistoryPageContent";

export default function HistoryPage() {
  return (
    <div className="flex flex-1 min-h-0 p-4 md:p-6">
      <div className="flex-1 min-h-0 overflow-hidden">
        <HistoryPageContent />
      </div>
    </div>
  );
}
