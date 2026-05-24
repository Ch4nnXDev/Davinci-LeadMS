import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar"

import Link from "next/link"

export function AppSidebar() {
  return (
    <Sidebar>

      {/* HEADER */}
      <SidebarHeader>
        <div className="flex items-center justify-center h-14 w-full bg-green-500 text-white font-bold text-lg">
          Davinci LeadMS
        </div>
      </SidebarHeader>

      {/* CONTENT */}
      <SidebarContent>
        <SidebarGroup>

          <Link
            href="/dashboard"
            className="block px-4 py-2 rounded hover:bg-gray-200"
          >
            Dashboard
          </Link>

          <Link
            href="/leads"
            className="block px-4 py-2 rounded hover:bg-gray-200"
          >
            Leads
          </Link>

          <Link
            href="/contacts"
            className="block px-4 py-2 rounded hover:bg-gray-200"
          >
            Contacts
          </Link>

          <Link
            href="/opportunities"
            className="block px-4 py-2 rounded hover:bg-gray-200"
          >
            Opportunities
          </Link>

        </SidebarGroup>
      </SidebarContent>

      {/* FOOTER */}
      <SidebarFooter>
        <div className="text-xs text-center p-3 text-gray-500">
          © 2024 Davinci LeadMS
        </div>
      </SidebarFooter>

    </Sidebar>
  )
}