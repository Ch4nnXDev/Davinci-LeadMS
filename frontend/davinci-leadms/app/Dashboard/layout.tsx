import { SidebarTrigger, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/Sidebar";

export default function DashboardLayout({
    children,}: Readonly<{
        children: React.ReactNode;
    }>
) {
    return (
        <main className="flex-1">
            <SidebarProvider>
                <div className="flex flex-1">
                    <AppSidebar />
                    <div className="flex-1">
                        <SidebarTrigger />
                        {children}
                    </div>
                </div>
            </SidebarProvider>

        </main>
    );
}