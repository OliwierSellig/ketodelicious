import NavigationLayout from "@/components/app/navigation/NavigationLayout";
import { ChildrenProp } from "@/utils/utilTypes";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: { template: "KetoDelicious | %s", default: "KetoDelicious" },
};

export default function RootLayout({ children }: ChildrenProp) {
  return <NavigationLayout>{children}</NavigationLayout>;
}
