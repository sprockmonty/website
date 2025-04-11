import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/app/ui/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nathan Davey",
  description: "Welcome to my website, may you be blessed.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-linear-to-tr from-backgroud to-blue-500 ${geistSans.variable} ${geistMono.variable} antialiased grid grid-flow-col items-center justify-items-center p-5 min-h-screen`}
      >
        <div className="items-center bg-greyterm max-w-7xl size-full shadow-[12px_12px_rgba(0,0,0,1)] flex flex-col border-raised">
          <div className="px-1 w-full">
            <Navigation />
          </div>
          <div className="p-3 grow w-full">
            <div className="border-sunk size-full bg-slate-200">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
