import HeadNavbar from "@/components/admin/HeadNavbar";
import SideNavbar from "@/components/admin/SideNavbar";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";



export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { userId } = auth();

  if (!userId) {
    redirect('/sign-in');
  }

  return (
      <div className="flex min-h-screen w-full flex-col bg-muted/40">
        <SideNavbar/>
        <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
          <HeadNavbar/>
          {children}
        </div>
      </div>
  );
}