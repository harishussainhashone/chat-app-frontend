import type { ReactElement } from "react";

type ChatDetailsProps = {
  chat?: {
    id: number;
    name: string;
    avatar: string;
    tag?: string;
    tags: string[];
    online: string;
    servedBy: string;
    viewing: string;
    viewingNumber: number;
    referrer: string;
    visits: number;
    chats: number;
    icons?: { component: (props: { className?: string }) => ReactElement; color: string }[];
  };
};

export default function ChatDetails({ chat }: ChatDetailsProps) {
  if (!chat) return <div>Chat not found</div>;
  return (
    <div className="p-8">
      <div
        className={`w-12 h-12 rounded-full flex items-center justify-center text-white text-2xl ${chat.avatar}`}
      >
        {chat.name[0]}
      </div>
      <h1 className="text-2xl font-bold mt-4">{chat.name}</h1>
      <div className="mt-2 text-gray-500">Tag: {chat.tag ?? "-"}</div>
      <div className="mt-2">Online: {chat.online}</div>
      <div className="mt-2">Served By: {chat.servedBy}</div>
      <div className="mt-2">
        Viewing: {chat.viewing} (#{chat.viewingNumber})
      </div>
      <div className="mt-2">Referrer: {chat.referrer}</div>
      <div className="mt-2">Visits: {chat.visits}</div>
      <div className="mt-2">Chats: {chat.chats}</div>
      <div className="mt-4 flex gap-2">
        {chat.icons?.map((icon, idx) => {
          const IconComponent = icon.component;
          return (
            <IconComponent key={`${chat.id}-${idx}`} className={`w-6 h-6 ${icon.color}`} />
          );
        })}
      </div>
    </div>
  );
}
