"use client";

import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";
import SetupShell from "@/components/onboarding/SetupShell";

const scriptSnippet = `<script>
  (function(w, d, s, u){
    w.ChatAppWidget = w.ChatAppWidget || function(){(w.ChatAppWidget.q = w.ChatAppWidget.q || []).push(arguments)};
    var js = d.createElement(s);
    js.async = true;
    js.src = u;
    var fjs = d.getElementsByTagName(s)[0];
    fjs.parentNode.insertBefore(js, fjs);
  })(window, document, "script", "https://cdn.chatapp.example/widget.js");
</script>`;

export default function WidgetSetupPage() {
  const router = useRouter();

  return (
    <SetupShell
      step={3}
      title="Install the chat widget"
      description="Paste this snippet before the closing </body> tag on your site."
    >
      <div className="space-y-6">
        <pre className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-xs text-gray-700 overflow-x-auto">
          {scriptSnippet}
        </pre>
        <div className="flex flex-col gap-3">
          <Button variant="secondary" type="button">
            Copy code
          </Button>
          <Button type="button" onClick={() => router.push("/dashboard")}>
            Finish setup
          </Button>
        </div>
      </div>
    </SetupShell>
  );
}
