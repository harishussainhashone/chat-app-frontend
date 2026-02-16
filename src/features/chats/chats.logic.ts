import type { IconType } from "react-icons";
import { HiComputerDesktop, HiDevicePhoneMobile } from "react-icons/hi2";

export type ChatSummary = {
  id: number;
  name: string;
  tag?: string;
  tags: string[];
  online: string;
  icons: { component: IconType; color: string }[];
  servedBy: string;
  viewing: string;
  viewingNumber: number;
  referrer: string;
  visits: number;
  chats: number;
  avatar: string;
};

export const chats: ChatSummary[] = [
  {
    id: 1,
    name: "Mike",
    tag: "Z3nrpinto",
    tags: ["Z3nrpinto"],
    online: "5 mins",
    icons: [
      { component: HiComputerDesktop, color: "text-gray-400" },
      { component: HiDevicePhoneMobile, color: "text-gray-400" },
    ],
    servedBy: "Cindy",
    viewing: "Pagina do Ricardo",
    viewingNumber: 1,
    referrer: "-",
    visits: 9,
    chats: 5,
    avatar: "bg-green-500",
  },
  {
    id: 2,
    name: "Tania",
    icons: [
      { component: HiComputerDesktop, color: "text-gray-400" },
      { component: HiDevicePhoneMobile, color: "text-gray-400" },
    ],
    tags: ["Z3nrpinto", "Mondocam"],
    online: "3 mins",
    servedBy: "Cindy",
    viewing: "Mondocam",
    viewingNumber: 2,
    referrer: "-",
    visits: 12,
    chats: 8,
    avatar: "bg-green-500",
  },
  {
    id: 3,
    name: "John",
    icons: [
      { component: HiComputerDesktop, color: "text-gray-400" },
      { component: HiDevicePhoneMobile, color: "text-gray-400" },
    ],
    tags: ["Mondocam"],
    online: "45 secs",
    servedBy: "John",
    viewing: "Mondocam",
    viewingNumber: 1,
    referrer: "-",
    visits: 7,
    chats: 3,
    avatar: "bg-green-500",
  },
  {
    id: 4,
    name: "Aloo",
    icons: [
      { component: HiComputerDesktop, color: "text-gray-400" },
      { component: HiDevicePhoneMobile, color: "text-gray-400" },
    ],
    tags: ["Mondocam"],
    online: "45 secs",
    servedBy: "John",
    viewing: "Mondocam",
    viewingNumber: 1,
    referrer: "-",
    visits: 7,
    chats: 3,
    avatar: "bg-green-500",
  },
];
