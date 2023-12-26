import CardsGrid from "@/components/app/user/about/CardsGrid";
import FavouriteRecipes from "@/components/app/user/about/FavouriteRecipes";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

function page() {
  return (
    <>
      <CardsGrid />
      <FavouriteRecipes />
    </>
  );
}

export default page;
