import SectionHeading from "@/components/app/SectionHeading";
import FavouritesCarousel from "@/components/app/favourites/FavouritesSlider";
import SliderList from "@/components/app/favourites/SliderList";

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
