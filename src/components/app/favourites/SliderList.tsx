import RecipeCard from "../RecipeCard";
import FavouritesSlider from "./FavouritesSlider";

function SliderList() {
  return (
    <ul className="flex h-full w-full flex-col gap-12">
      <FavouritesSlider
        subheading="Under 15 minutes"
        heading="For All The Busy Folks"
      >
        {Array.from({ length: 8 }, (_, i) => (
          <div key={i}>
            <RecipeCard />
          </div>
        ))}
      </FavouritesSlider>
      <FavouritesSlider
        subheading="Less that 400 calories"
        heading="For Those Guilt-Free Feasts"
      >
        {Array.from({ length: 10 }, (_, i) => (
          <div key={i}>
            <RecipeCard />
          </div>
        ))}
      </FavouritesSlider>
      <FavouritesSlider
        subheading="Less than 5g net carbs"
        heading="For The Most Strict Freaks"
      >
        {Array.from({ length: 6 }, (_, i) => (
          <div key={i}>
            <RecipeCard />
          </div>
        ))}
      </FavouritesSlider>
    </ul>
  );
}

export default SliderList;
