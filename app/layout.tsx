import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "ASWIN ANAND",
  description: "Full-Stack Developer | Systems, CLI Tooling & Production Workflows",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body>
        {children}
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
