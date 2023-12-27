import { UserProvider } from "@/context/UserContext";
import { ChildrenProp } from "@/utils/utilTypes";

function layout({ children }: ChildrenProp) {
  return <UserProvider>{children}</UserProvider>;
}

export default layout;
