import type { Metadata } from "next";
import {SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar";
import {AppSidebar} from "@/components/Sidebar";
import "./globals.css";



export const metadata: Metadata = {
  title: "Davinci LeadMS",
  description: "Manages Leads of Davinci Ceramics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
    >
      <body className="min-h-full flex flex-col">
        <SidebarProvider>
          <div className="flex flex-1">
            <AppSidebar />
            <main>
              <SidebarTrigger />
              {children}
            </main>
          </div>
        </SidebarProvider>
        </body>
    </html>
  );
}
