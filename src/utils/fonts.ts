import { Ubuntu, Kalam, Inter } from "next/font/google";

export const ubuntu = Ubuntu({
  weight: ["400", "500", "700"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-ubuntu",
});

export const inter = Inter({
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-inter",
});

export const kalam = Kalam({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-kalam",
});
