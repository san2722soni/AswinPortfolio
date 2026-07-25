import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";
import Wrapper from "./Wrapper";

export const metadata: Metadata = {
  title: "ASWIN ANAND",
  description: "Full-Stack Developer | Systems, CLI Tooling & Production Workflows",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  // const showSplashScreen = useSplashScreen();

  return (
    <html lang="en">
      <head></head>
      <body>
        <Wrapper>
          {/* <AnimatePresence>
            {showSplashScreen && <SplashScreen />}
          </AnimatePresence> */}
          {children}
          <Toaster position="bottom-right" />
        </Wrapper>
      </body>
    </html>
  );
}
