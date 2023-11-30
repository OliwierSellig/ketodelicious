import { Ubuntu, Kalam, Inter, Nunito, Playpen_Sans } from "next/font/google";

export const ubuntu = Ubuntu({
  weight: ["400", "500", "700"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-ubuntu",
});

export const nunito = Nunito({
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-nunito",
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

export const playpen_sans = Playpen_Sans({
  weight: ["700"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-playpen_sans",
});
