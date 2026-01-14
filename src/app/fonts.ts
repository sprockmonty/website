import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const elstob = localFont({
  src: [
    {
      path: '../../public/fonts/Elstob.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Elstob-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
  ],
  variable: "--font-elstob-base",
})
export const mapleMono = localFont({
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
  variable: "--font-maple-mono",
});
