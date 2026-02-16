import type { ReactNode } from "react";

export type ChatListItemProps = {
  title: string;
  subtitle?: string;
  rightSlot?: ReactNode;
};

export default function ChatListItem({ title, subtitle, rightSlot }: ChatListItemProps) {
  return (
    <div className="flex items-center justify-between p-3 border-b border-gray-200 hover:bg-gray-50">
      <div>
        <div className="text-sm font-medium text-gray-900">{title}</div>
        {subtitle ? <div className="text-xs text-gray-500">{subtitle}</div> : null}
      </div>
      <div>{rightSlot}</div>
    </div>
  );
}
