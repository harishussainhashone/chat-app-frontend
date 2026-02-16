import { redirect } from "next/navigation";

export function legacyRootRedirect() {
  redirect("/login");
}
