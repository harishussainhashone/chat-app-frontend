import { UserCircle } from "lucide-react";

export type ChatMessage = {
  id: number;
  sender: "system" | "customer" | "agent";
  name: string;
  content: string;
  time: string;
  isJoin?: boolean;
};

type MessageBubbleProps = {
  message: ChatMessage;
};

export default function MessageBubble({ message }: MessageBubbleProps) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div className="flex items-start gap-3">
        <UserCircle className="text-gray-300" size={32} />

        <div>
          <div className="text-sm font-medium text-gray-700">
            {message.name}{" "}
            <span className="font-normal text-gray-500">via chat</span>
          </div>

          <div
            className={`text-sm ${
              message.isJoin ? "text-gray-500" : "text-gray-800"
            }`}
          >
            {message.content}
          </div>
        </div>
      </div>

      <div className="text-xs text-gray-400 whitespace-nowrap">
        {message.time}
      </div>
    </div>
  );
}
