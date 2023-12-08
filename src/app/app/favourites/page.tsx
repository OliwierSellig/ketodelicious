import FavouritesCarousel from "@/components/app/favourites/FavouritesCarousel";

function page() {
  return (
    <main className="w-full overflow-x-clip p-16">
      <h1 className="section-header">
        Our <span className="text-jade-normal">Favourites</span>
      </h1>
      <FavouritesCarousel
        subheading="Under 15 minutes"
        heading="For All The Busy Folks"
      />
    </main>
  );
}

export default page;
