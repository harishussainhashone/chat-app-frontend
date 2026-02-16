import Link from "next/link";
import Button from "@/components/ui/Button";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-100">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <div className="text-lg font-semibold text-gray-900">ChatApp</div>
          <div className="flex items-center gap-3">
            <Link href="/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link href="/signup">
              <Button>Sign up</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-10 px-6 py-16 md:grid-cols-2 md:items-center">
        <div>
          <h1 className="text-4xl font-semibold leading-tight text-gray-900 md:text-5xl">
            A better way to talk to your customers
          </h1>
          <p className="mt-4 text-base text-gray-600">
            Meet visitors in real time, capture leads automatically, and support
            customers from one shared inbox.
          </p>
          <div className="mt-6 flex items-center gap-4">
            <Link href="/signup">
              <Button className="px-6">Try for free</Button>
            </Link>
            <Link href="/login" className="text-sm font-medium text-gray-600">
              Already using ChatApp? Log in
            </Link>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
          <div className="flex items-center gap-3 border-b border-gray-200 pb-4">
            <div className="h-3 w-3 rounded-full bg-red-400" />
            <div className="h-3 w-3 rounded-full bg-yellow-400" />
            <div className="h-3 w-3 rounded-full bg-green-400" />
            <div className="ml-auto text-xs text-gray-500">Chat widget preview</div>
          </div>
          <div className="mt-6 space-y-4">
            <div className="rounded-lg bg-white p-4 shadow-sm">
              <div className="text-xs text-gray-500">Visitor</div>
              <div className="mt-1 text-sm text-gray-800">
                Hi there! Can you help me choose a plan?
              </div>
            </div>
            <div className="rounded-lg bg-blue-600 p-4 text-white shadow-sm">
              <div className="text-xs text-blue-100">ChatApp</div>
              <div className="mt-1 text-sm">
                Absolutely. Let me suggest the best option for your team.
              </div>
            </div>
            <div className="rounded-lg border border-dashed border-gray-300 bg-white p-4 text-sm text-gray-500">
              Your replies, notes, and visitor details live here.
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
