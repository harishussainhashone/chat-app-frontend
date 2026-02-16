"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import SetupShell from "@/components/onboarding/SetupShell";

const goals = [
  "Chat with my website visitors",
  "Centralize my emails",
  "Build a chatbot",
  "Build an AI Agent",
  "Integrate messaging channels",
  "I'm just curious",
];

export default function SetupPage() {
  const router = useRouter();
  const [companyName, setCompanyName] = useState("");
  const [domain, setDomain] = useState("");
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push("/dashboard");
  };

  return (
    <SetupShell
      step={1}
      totalSteps={1}
      title="Some details about your company"
      description="Fill in your company information to continue (you can edit it later)."
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="text-sm font-medium text-gray-700" htmlFor="companyName">
            What is the name of your company?
          </label>
          <Input
            id="companyName"
            name="companyName"
            placeholder="Company name"
            value={companyName}
            onChange={(event) => setCompanyName(event.target.value)}
            required
            className="mt-2"
          />
        </div> 
        <div>
          <label className="text-sm font-medium text-gray-700" htmlFor="domain">
            What is your website domain?
          </label>
          <Input
            id="domain"
            name="domain"
            placeholder="www.acme.com"
            value={domain}
            onChange={(event) => setDomain(event.target.value)}
            required
            className="mt-2"
          />
        </div>
        <div>
          <p className="text-sm font-medium text-gray-700">
            Which is your main goal with ChatApp?
          </p>
          <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {goals.map((goal) => {
              const isActive = selectedGoal === goal;
              return (
                <button
                  key={goal}
                  type="button"
                  onClick={() => setSelectedGoal(goal)}
                  className={`rounded-lg border px-4 py-2 text-left text-sm transition ${
                    isActive
                      ? "border-blue-500 bg-blue-50 text-blue-700"
                      : "border-gray-200 bg-white text-gray-600 hover:border-gray-300"
                  }`}
                >
                  {goal}
                </button>
              );
            })}
          </div>
        </div>
        <div className="flex justify-end">
          <Button type="submit">Continue</Button>
        </div>
      </form>
    </SetupShell>
  );
}
