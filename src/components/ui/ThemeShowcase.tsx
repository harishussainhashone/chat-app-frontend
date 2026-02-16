import React from 'react';

export default function ThemeShowcase() {
  return (
    <div className="p-8 min-h-screen bg-background text-foreground transition-colors duration-300">
      
      {/* 1. Header using Gray Scale */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Project Dashboard</h1>
        <p className="text-muted-foreground">Using your custom CSS variable theme.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* 2. Standard Surface Card */}
        <div className="p-6 rounded-xl bg-surface border border-border shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Primary Storage</h2>
          <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
            {/* Using sidebar-active color for a progress bar */}
            <div className="h-full bg-sidebar-active w-3/4"></div>
          </div>
          <p className="mt-4 text-sm text-muted">75% of your quota used.</p>
        </div>

        {/* 3. Surface-2 (Alternative background) Card */}
        <div className="p-6 rounded-xl bg-surface-2 border border-border-strong">
          <h3 className="font-medium text-foreground">Action Required</h3>
          <p className="text-muted-foreground mt-2 mb-4">
            Verify your account settings to enable the new sidebar features.
          </p>
          {/* Button using Sidebar Colors */}
          <button className="px-4 py-2 bg-sidebar text-sidebar-foreground rounded-lg hover:bg-sidebar-hover transition-colors">
            Verify Now
          </button>
        </div>

      </div>

      {/* 4. Scrollbar Showcase */}
      <div className="mt-8 p-6 bg-surface border border-border rounded-xl">
        <h3 className="mb-4 font-semibold">Custom Scrollbar Area</h3>
        <div className="custom-scrollbar h-32 overflow-y-scroll p-4 bg-surface-3 rounded-lg">
          <p className="h-64">
            Scroll down to see the custom scrollbar in action! It uses your 
            <code className="bg-gray-200 px-1 rounded mx-1">--scrollbar-thumb</code> 
            colors. This area is styled with <code className="text-sidebar-active">.custom-scrollbar</code>.
          </p>
        </div>
      </div>

      {/* 5. Gradient Showcase */}
      <div className="mt-8 h-24 rounded-xl login-gradient flex items-center justify-center border border-border">
        <span className="font-bold text-gray-800">Custom Login Gradient Background</span>
      </div>
    </div>
  );
}