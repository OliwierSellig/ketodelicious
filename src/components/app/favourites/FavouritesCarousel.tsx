import RecipeCard from "../RecipeCard";
import Slider from "../Slider";

interface FavouritesCarouselProps {
  subheading: string;
  heading: string;
}

function FavouritesCarousel({ subheading, heading }: FavouritesCarouselProps) {
  return (
    <div className="mb-16">
      <h2 className="mb-6 font-medium">
        <p className="text-xl text-jade-shade-2">{subheading}</p>
        <p className="font-ubuntu text-4xl">{heading}</p>
      </h2>
      <Slider>
        {Array.from({ length: 8 }, (_, i) => (
          <div key={i} className="">
            <RecipeCard />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default FavouritesCarousel;
