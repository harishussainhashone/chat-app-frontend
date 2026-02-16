"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { useAuthStore } from "@/store";
import Image from "next/image";

export default function Signup() {
  const router = useRouter();
  const login = useAuthStore((s) => s.login);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!acceptedTerms) return;
    setIsLoading(true);
    try {
      await login(email, password);
      router.push("/setup");
    } finally {
      setIsLoading(false);
    }
  };

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

      <div className="mx-auto w-full max-w-2xl px-6 py-5">
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">Get started</h1>
              <p className="mt-2 text-sm text-gray-600">
                Create your free ChatApp account to continue.
              </p>
            </div>
         
          </div>

          <div className="mt-6 ">
            <Button
              type="button"
              variant="secondary"
              className="w-full border border-gray-200   hover:bg-gray-600 bg-gray-700 text-white"
            >
            <Image
            
              src="/images/LogoGoogle.png"
              alt="Google logo"
              width={16}
              height={16}
              className="object-contain mr-[5px]"  
           />
             
              Sign up with Google
            </Button>
          </div>

          <div className="my-6 flex items-center gap-3 text-xs uppercase tracking-wide text-gray-400">
            <div className="h-px flex-1 bg-gray-200" />
            Or signup with your email
            <div className="h-px flex-1 bg-gray-200" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium text-gray-700" htmlFor="firstName">
                  Your first name
                </label>
                <Input
                  id="firstName"
                  name="firstName"
                  placeholder="First name"
                  value={firstName}
                  onChange={(event) => setFirstName(event.target.value)}
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700" htmlFor="lastName">
                  Your last name
                </label>
                <Input
                  id="lastName"
                  name="lastName"
                  placeholder="Last name"
                  value={lastName}
                  onChange={(event) => setLastName(event.target.value)}
                  required
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700" htmlFor="email">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Type your email address"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700" htmlFor="password">
                Password
              </label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Enter a password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </div>
            <label className="flex items-center gap-2 text-sm text-gray-600">
              <input
                type="checkbox"
                checked={acceptedTerms}
                onChange={(event) => setAcceptedTerms(event.target.checked)}
                className="h-4 w-4 rounded border-gray-300 text-blue-600"
              />
              I have read and I accept ChatApp terms of use.
            </label>
            <Button type="submit" className="w-full" disabled={isLoading || !acceptedTerms}>
              {isLoading ? "Creating account..." : "Continue"}
            </Button>
          </form>

          <div className="mt-8 border-t border-gray-200 pt-6 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link className="font-medium text-blue-600 hover:text-blue-700" href="/login">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
