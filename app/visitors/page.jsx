'use client';

import VisitorsHeader from '@/components/visitors/VisitorsHeader';
import VisitorsList from '@/components/visitors/VisitorsList';
import ActiveVisitorsList from '@/components/visitors/ActiveVisitorsList';

export default function VisitorsPage() {
  return (
    <div className="flex flex-1">
      <div className="flex-1 p-4 md:p-8 overflow-y-auto">
        <div className="max-w-7xl">
          <VisitorsHeader />
          <VisitorsList />
          <ActiveVisitorsList />
        </div>
      </div>
    </div>
  );
}
