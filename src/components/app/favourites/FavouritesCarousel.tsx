interface FavouritesCarouselProps {
  subheading: string;
  heading: string;
}

function FavouritesCarousel({ subheading, heading }: FavouritesCarouselProps) {
  return (
    <div>
      <h2 className="">
        <p className="text-xl text-jade-shade-2">{subheading}</p>
        <p className="font-ubuntu text-4xl">{heading}</p>
      </h2>
      <div></div>
    </div>
  );
}

export default FavouritesCarousel;
