//src/app/(auth)/setup/company/page.tsx
"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import SetupShell from "@/components/onboarding/SetupShell";

export default function CompanySetupPage() {
  const router = useRouter();
  const [companyName, setCompanyName] = useState("");
  const [website, setWebsite] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push("/setup/widget");
  };

  return (
    <SetupShell
      step={2}
      title="Company details"
      description="Add the basics so your workspace is ready."
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="text-sm font-medium text-gray-700" htmlFor="companyName">
            Company name
          </label>
          <Input
            id="companyName"
            name="companyName"
            placeholder="Acme Inc."
            value={companyName}
            onChange={(event) => setCompanyName(event.target.value)}
            required
          />
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700" htmlFor="website">
            Website
          </label>
          <Input
            id="website"
            name="website"
            placeholder="https://acme.com"
            value={website}
            onChange={(event) => setWebsite(event.target.value)}
            required
          />
        </div>
        <Button type="submit" className="w-full">
          Continue
        </Button>
      </form>
    </SetupShell>
  );
}
