import { UserProvider } from "@/context/UserContext";
import { ChildrenProp } from "@/utils/utilTypes";
import { CreateRecipeProvider } from "@/context/CreateRecipeContext";

function layout({ children }: ChildrenProp) {
  return (
    <UserProvider>
      <CreateRecipeProvider>{children}</CreateRecipeProvider>
    </UserProvider>
  );
}

export default layout;
