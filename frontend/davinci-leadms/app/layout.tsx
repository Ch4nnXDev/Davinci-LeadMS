import type { Metadata } from "next";
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
      <body className="h-screen flex flex-col w-full"> 
        
        <main className="flex-1">
          {children}
        
        </main>

      </body>
    </html>
  );
}
