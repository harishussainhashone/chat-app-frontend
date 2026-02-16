//src/components/login/Login.tsx
"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { useAuthStore } from "@/store";
import Image from "next/image";

export default function Login() {
  const router = useRouter();
  const login = useAuthStore((s) => s.login);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setErrorMessage(null);
    try {
      await login(email, password);
      router.push("/dashboard");
    } catch (error) {
      setErrorMessage("Login failed. Please check your details and try again.");
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

      <div className="mx-auto w-full max-w-2xl px-6 py-12">
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Login</h1>
            <p className="mt-2 text-sm text-gray-600">
              Log in to your ChatApp account to access your workspace.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          {errorMessage && (
            <div className="rounded-lg border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
              {errorMessage}
            </div>
          )}
          <div>
            <label className="text-sm font-medium text-gray-700" htmlFor="email">
              Sign in with your email address
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email..."
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
              placeholder="Enter your password..."
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>
          <label className="flex items-center gap-2 text-sm text-gray-600">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(event) => setRememberMe(event.target.checked)}
              className="h-4 w-4 rounded border-gray-300 text-blue-600"
            />
            Remember me
          </label>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <Button
              type="button"
              variant="secondary"
              className="w-full border border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
            >
              <Image
                          
                            src="/images/LogoGoogle.png"
                            alt="Google logo"
                            width={16}
                            height={16}
                            className="object-contain mr-[5px]"  
                         />
              Login with Google
            </Button>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Logging in..." : "Login"}
            </Button>
          </div>
        </form>

          <div className="mt-6 flex items-center justify-between text-sm text-gray-600">
            <Link className="font-medium text-blue-600 hover:text-blue-700" href="/signup">
              Don't have an account yet? Get started.
            </Link>
            <button type="button" className="text-gray-500 hover:text-gray-700">
              Forgot Password?
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
