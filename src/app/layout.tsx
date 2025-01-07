import type { Metadata } from "next";
import "./globals.css";
import { fontSans, fontMono } from "@/config/fonts";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Cody.Val",
  description:
    "Two dev friends sharing their journey through JavaScript, TypeScript, and modern web development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("bg-rose-500", fontSans.variable, fontMono.variable)}>
        {children}
      </body>
    </html>
  );
}
