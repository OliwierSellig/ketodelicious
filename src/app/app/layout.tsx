import AppNavigation from "@/components/app/AppNavigation";
import { ChildrenProp } from "@/utils/utilTypes";

export default function RootLayout({ children }: ChildrenProp) {
  return <AppNavigation>{children}</AppNavigation>;
}
