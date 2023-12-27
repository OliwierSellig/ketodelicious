import type { Metadata } from "next";
import { inter, kalam, ubuntu } from "@/utils/fonts";
import "../styles/globals.css";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Crave Less, Live Longer | KetoDelicious",
  description:
    "Explore a world where delicious meets nutritious, taking every bite closer to your health and wellness goals. Redefine your culinary journey with mouthwatering recipes, satisfying cravings without compromising flavor. Embrace a lifestyle that's both delicious and mindful.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${ubuntu.variable} ${kalam.variable} ${inter.variable}`}
    >
      <body className="recipe-scroll bg-almond-tint-2">{children}</body>
    </html>
  );
}
