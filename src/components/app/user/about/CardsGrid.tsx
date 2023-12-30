import {
  ArrowsUpDownIcon,
  BookOpenIcon,
  TagIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import ActivitiesList from "./ActivitiesList";
import IngredientsList from "./IngredientsList";
import TagList from "./TagList";
import AboutBox from "./AboutBox";
import AboutInfo from "./AboutInfo";

function CardsGrid() {
  return (
    <div className="mx-auto mb-20 grid max-w-[1200px] grid-cols-2 gap-8">
      <AboutBox
        heading="Personal Info"
        icon={<UserIcon />}
        additionalClass="xxl:col-span-2 animate-[fadeLeft_1s]"
      >
        <AboutInfo />
      </AboutBox>
      <AboutBox
        icon={<ArrowsUpDownIcon />}
        heading="Latest Activities"
        additionalClass="xxl:col-span-2 min-h-[320px] animate-[fadeRight_1s]"
      >
        <ActivitiesList />
      </AboutBox>
      <AboutBox
        icon={<TagIcon />}
        heading="Tags describing you"
        additionalClass="lg:col-span-2 animate-[fadeBottom_1.2s]"
      >
        <TagList />
      </AboutBox>
      <AboutBox
        icon={<BookOpenIcon />}
        heading="Commonly used ingredients"
        additionalClass="lg:col-span-2 animate-[fadeBottom_1.2s]"
      >
        <IngredientsList />
      </AboutBox>
    </div>
  );
}

export default CardsGrid;
