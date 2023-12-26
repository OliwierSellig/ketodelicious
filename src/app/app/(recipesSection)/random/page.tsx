import RandomRecipeWindow from "@/components/app/random/RandomRecipeWindow";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Random Recipe",
};

function page() {
  return (
    <>
      <RandomRecipeWindow />
    </>
  );
}

export default page;
