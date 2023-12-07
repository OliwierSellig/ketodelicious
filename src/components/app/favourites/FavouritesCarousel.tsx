import Slider from "../Slider";

interface FavouritesCarouselProps {
  subheading: string;
  heading: string;
}

function FavouritesCarousel({ subheading, heading }: FavouritesCarouselProps) {
  return (
    <div>
      <h2 className="mb-6 font-medium">
        <p className="text-xl text-jade-shade-2">{subheading}</p>
        <p className="font-ubuntu text-4xl">{heading}</p>
      </h2>
      <Slider />
    </div>
  );
}

export default FavouritesCarousel;
