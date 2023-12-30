import { CreateRecipeProvider } from "@/context/CreateRecipeContext";
import { UserProvider } from "@/context/UserContext";
import { ChildrenProp } from "@/utils/utilTypes";

function layout({ children }: ChildrenProp) {
  return (
    <UserProvider>
      <CreateRecipeProvider>{children}</CreateRecipeProvider>
    </UserProvider>
  );
}

export default layout;
