import { SidebarTrigger, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-full">

        {/* Sidebar */}
        <AppSidebar />

        {/* Main Content */}
        <div className="flex flex-col flex-1">

          <header className="p-2 border-b">
            <SidebarTrigger />
          </header>

          <main className="flex-1 p-4">
            {children}
          </main>

        </div>

      </div>
    </SidebarProvider>
  );
}