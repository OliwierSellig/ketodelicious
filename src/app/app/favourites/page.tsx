import FavouritesCarousel from "@/components/app/favourites/FavouritesCarousel";

function page() {
  return (
    <>
      <h1 className="section-header">
        Our <span className="text-jade-normal">Favourites</span>
      </h1>
      <div className="h-full w-full">
        <FavouritesCarousel
          subheading="Under 15 minutes"
          heading="For All The Busy Folks"
        />
        <FavouritesCarousel
          subheading="Less that 400 calories"
          heading="For Those Guilt-Free Feasts"
        />
        <FavouritesCarousel
          subheading="Less than 5g net carbs"
          heading="For The Most Strict Freaks"
        />
      </div>
    </>
  );
}

export default page;
