"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import SetupShell from "@/components/onboarding/SetupShell";

export default function ProfileSetupPage() {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [website, setWebsite] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push("/setup/company");
  };

  return (
    <SetupShell
      step={1}
      title="Complete Profile"
      description="Please start by completing your profile:"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="text-sm font-medium text-gray-700" htmlFor="fullName">
            Full name
          </label>
          <Input
            id="fullName"
            name="fullName"
            placeholder="Jane Cooper"
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
            required
          />
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700" htmlFor="website">
            Website address
          </label>
          <Input
            id="website"
            name="website"
            placeholder="https://example.com"
            value={website}
            onChange={(event) => setWebsite(event.target.value)}
            required
          />
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700" htmlFor="phone">
            Phone
          </label>
          <Input
            id="phone"
            name="phone"
            placeholder="+1 555 000 1234"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
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