import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
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

const mapleMono = localFont({
  src: [
    {
      path: "../../public/fonts/MapleMono-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/MapleMono-ExtraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/MapleMono-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/MapleMono-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/MapleMono-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/MapleMono-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/MapleMono-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/MapleMono-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/MapleMono-ExtraBold.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../public/fonts/MapleMono-ThinItalic.woff2",
      weight: "100",
      style: "italic",
    },
    {
      path: "../../public/fonts/MapleMono-ExtraLightItalic.woff2",
      weight: "200",
      style: "italic",
    },
    {
      path: "../../public/fonts/MapleMono-LightItalic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/fonts/MapleMono-MediumItalic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/MapleMono-MediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/fonts/MapleMono-SemiBoldItalic.woff2",
      weight: "600",
      style: "italic",
    },
    {
      path: "../../public/fonts/MapleMono-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../public/fonts/MapleMono-ExtraBoldItalic.woff2",
      weight: "800",
      style: "italic",
    },
    {
      path: "../../public/fonts/MapleMono-ExtraBoldItalic.woff2",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-maple",
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
        className={`bg-linear-to-tr from-backgroud to-blue-500 ${geistSans.variable} ${geistMono.variable} ${mapleMono.variable} antialiased grid grid-flow-col items-center justify-items-center md:p-5 min-h-screen`}
      >
        <div className="items-center bg-greyterm max-w-7xl size-full shadow-[12px_12px_rgba(0,0,0,1)] flex flex-col border-raised">
          <div className="px-1 w-full">
            <Navigation />
          </div>
          <div className="p-1 md:p-3 grow w-full">
            <div className="border-sunk size-full bg-slate-200 overflow-auto">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
