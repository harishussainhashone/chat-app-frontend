//src/components/onboarding/SetupShell.tsx
import type { ReactNode } from "react";


type SetupShellProps = {
  children: ReactNode;
  step: number;
  totalSteps?: number;
  title: string;
  description?: string;
};

export default function SetupShell({
  children,
  step,
  totalSteps = 1,
  title,
  description,
}: SetupShellProps) {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-100">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
          <div className="text-lg font-semibold text-gray-900">ChatApp</div>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <button type="button" className="hover:text-gray-700">
              Need help?
            </button>
            <button type="button" className="flex items-center gap-2 hover:text-gray-700">
              English
              <span className="text-xs">▼</span>
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto w-full max-w-3xl px-6 py-12">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
            {description && (
              <p className="mt-2 text-sm text-gray-600">{description}</p>
            )}
          </div>
       
        </div>

        <div className="mt-10 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          {children}
        </div>
      </div>
    </div>
  );
}
