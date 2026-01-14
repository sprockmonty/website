import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/app/ui/Navigation/Navigation";
import { geistMono, geistSans, mapleMono } from "@/app/fonts";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Nathan Davey",
  description: "Welcome to my website, may you be blessed.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-linear-to-tr from-background to-blue-500 ${geistSans.variable} ${geistMono.variable} ${mapleMono.variable} antialiased grid grid-flow-col items-center justify-items-center md:p-5 min-h-screen max-w-screen overflow-y-scroll`}
      >
        <div className="items-center bg-greyterm max-w-7xl size-full shadow-[12px_12px_rgba(0,0,0,1)] flex flex-col border-raised overflow-auto">
          <div className="px-1 w-full">
            <Navigation />
          </div>
          <div className="p-1 md:p-3 grow w-full">
            <div className="border-sunk size-full bg-slate-200">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
