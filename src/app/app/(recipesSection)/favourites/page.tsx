import SectionHeading from "@/components/app/SectionHeading";
import SliderList from "@/components/app/favourites/SliderList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Favourites",
};
function page() {
  return (
    <>
      <SectionHeading>
        Our <SectionHeading.Highlight>Favourites</SectionHeading.Highlight>
      </SectionHeading>
      <SliderList />
    </>
  );
}

export default page;
