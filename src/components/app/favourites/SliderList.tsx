import RecipeCard from "../../global/RecipeCard";
import FavouritesSlider from "./FavouritesSlider";

function SliderList() {
  return (
    <ul className="flex h-full w-full flex-col gap-12">
      <FavouritesSlider
        subheading="Under 15 minutes"
        heading="For All The Busy Folks"
      >
        {Array.from({ length: 8 }, (_, i) => (
          <RecipeCard
            key={i}
            additionalClass="xxl:min-w-[280px] xxxl:min-w-[320px] min-w-[360px] sm:min-w-[260px]"
          />
        ))}
      </FavouritesSlider>
      <FavouritesSlider
        subheading="Less that 400 calories"
        heading="For Those Guilt-Free Feasts"
      >
        {Array.from({ length: 10 }, (_, i) => (
          <RecipeCard
            key={i}
            additionalClass="xxl:min-w-[280px] xxxl:min-w-[320px] min-w-[360px] sm:min-w-[260px]"
          />
        ))}
      </FavouritesSlider>
      <FavouritesSlider
        subheading="Less than 5g net carbs"
        heading="For The Most Strict Freaks"
      >
        {Array.from({ length: 6 }, (_, i) => (
          <RecipeCard
            key={i}
            additionalClass="xxl:min-w-[280px] xxxl:min-w-[320px] min-w-[360px] sm:min-w-[260px]"
          />
        ))}
      </FavouritesSlider>
    </ul>
  );
}

export default SliderList;
