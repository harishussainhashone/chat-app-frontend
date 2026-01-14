'use client';

import { HiCog, HiChartBar, HiUsers, HiBolt } from 'react-icons/hi2';

export default function WelcomeSection() {
  const quickActions = [
    {
      icon: HiCog,
      title: 'Widget',
      description: 'Embed and customize the widget on your website',
      color: 'text-gray-500'
    },
    {
      icon: HiChartBar,
      title: 'Analytics',
      description: 'Track the chats you have with customers',
      color: 'text-gray-500'
    },
    {
      icon: HiUsers,
      title: 'Visitors',
      description: 'See a list of all your web visitors and chat with them',
      color: 'text-gray-500'
    },
    {
      icon: HiBolt,
      title: 'Triggers',
      description: 'Send chat invites or custom messages to pre-qualified leads',
      color: 'text-gray-500'
    }
  ];

  return (
    <div className="mb-6 md:mb-8">
      <h1 className="text-xl md:text-2xl font-normal text-gray-800 mb-4 md:mb-6">
        Hello, <span className="font-semibold">Aimee Spanier!</span>
      </h1>
      
      {/* Quick Actions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 mb-6 md:mb-8">
        {quickActions.map((action, index) => (
          <div key={index} className="flex items-start gap-3 md:gap-4 p-3 md:p-4 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
            <action.icon className={`text-2xl md:text-3xl ${action.color} flex-shrink-0 mt-1`} />
            <div>
              <h3 className="text-sm md:text-base font-semibold text-blue-600 mb-1">{action.title}</h3>
              <p className="text-xs md:text-sm text-gray-600">{action.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="border-b border-gray-200"></div>
    </div>
  );
}
