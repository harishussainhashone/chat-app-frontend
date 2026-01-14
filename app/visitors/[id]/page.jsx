"use client";
import React from 'react';
import { useParams } from 'next/navigation';

import { visitors } from '../../../data/visitors';

export default function VisitorDetailPage() {
  const params = useParams();
  const visitorId = parseInt(params.id, 10);
  const visitor = visitors.find(v => v.id === visitorId);

  if (!visitor) return <div>Visitor not found</div>;

  return (
    <div className="p-8">
      <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white text-2xl ${visitor.avatar}`}>{visitor.name[0]}</div>
      <h1 className="text-2xl font-bold mt-4">{visitor.name}</h1>
      <div className="mt-2 text-gray-500">Tag: {visitor.tag}</div>
      <div className="mt-2">Online: {visitor.online}</div>
      <div className="mt-2">Served By: {visitor.servedBy}</div>
      <div className="mt-2">Viewing: {visitor.viewing} (#{visitor.viewingNumber})</div>
      <div className="mt-2">Referrer: {visitor.referrer}</div>
      <div className="mt-2">Visits: {visitor.visits}</div>
      <div className="mt-2">Chats: {visitor.chats}</div>
      <div className="mt-4 flex gap-2">
        {visitor.icons && visitor.icons.map((icon, idx) => {
          const IconComponent = icon.component;
          return <IconComponent key={idx} className={`w-6 h-6 ${icon.color}`} />;
        })}
      </div>
    </div>
  );
}
