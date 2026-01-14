import { HiComputerDesktop, HiDevicePhoneMobile } from 'react-icons/hi2';

export const visitors = [
  {
    id: 1,
    name: 'Mike',
    tag: 'Z3nrpinto',
    tags: ['Z3nrpinto'],
    online: '5 mins',
    icons: [
      { component: HiComputerDesktop, color: 'text-gray-400' },
      { component: HiDevicePhoneMobile, color: 'text-gray-400' }
    ],
    servedBy: 'Cindy',
    viewing: 'Página do Ricardo',
    viewingNumber: 1,
    referrer: '-',
    visits: 9,
    chats: 5,
    avatar: 'bg-green-500'
  },
  {
    id: 2,
    name: 'Tania',
    icons: [
      { component: HiComputerDesktop, color: 'text-gray-400' },
      { component: HiDevicePhoneMobile, color: 'text-gray-400' }
    ],
    tags: ['Z3nrpinto', 'Mondocam'],
    online: '3 mins',
    flags: [ '💻', '📱'],
    servedBy: 'Cindy',
    viewing: 'Mondocam',
    viewingNumber: 2,
    referrer: '-',
    visits: 12,
    chats: 8,
    avatar: 'bg-green-500'
  },
  {
    id: 3,
    name: 'John',
    icons: [
      { component: HiComputerDesktop, color: 'text-gray-400' },
      { component: HiDevicePhoneMobile, color: 'text-gray-400' }
    ],
    tags: ['Mondocam'],
    online: '45 secs',
    flags: [ '💻', '📱'],
    servedBy: 'John',
    viewing: 'Mondocam',
    viewingNumber: 1,
    referrer: '-',
    visits: 7,
    chats: 3,
    avatar: 'bg-green-500'
  }
  ,
  {
    id: 4,
    name: 'aloo',
    icons: [
      { component: HiComputerDesktop, color: 'text-gray-400' },
      { component: HiDevicePhoneMobile, color: 'text-gray-400' }
    ],
    tags: ['Mondocam'],
    online: '45 secs',
    flags: [ '💻', '📱'],
    servedBy: 'John',
    viewing: 'Mondocam',
    viewingNumber: 1,
    referrer: '-',
    visits: 7,
    chats: 3,
    avatar: 'bg-green-500'
  }
];
