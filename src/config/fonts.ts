import { Reddit_Sans, Reddit_Mono } from "next/font/google";

export const fontSans = Reddit_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const fontMono = Reddit_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});
