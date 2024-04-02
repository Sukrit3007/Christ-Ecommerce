import { redirect } from "next/navigation";
import { checkRole } from "@/utils/roles";
 
export default function AdminDashboard() {

  if (!checkRole("admin")) {
    redirect("/");
  }
 
  return (
    <main className="p-4 sm:px-6 sm:py-0 md:gap-8">
        amin
    </main>
  );
}