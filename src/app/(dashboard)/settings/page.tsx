//src/app/(dashboard)/settings/page.tsx
import ThemechangerButton from "@/components/ui/ThemechangerButton";
import ThemeShowcase from "@/components/ui/ThemeShowcase";

export default function Page() {
  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold text-gray-900">Settings</h1>
      <p className="text-sm text-gray-600 mt-2">
        Placeholder page for Settings.
      </p>
      <div className="mt-6">
        <ThemechangerButton />
        <div className="mt-5">

        {/* <ThemeShowcase/>  */}
        </div>
      </div>
    </div>
  );
}
