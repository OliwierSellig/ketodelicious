import {
  ArrowsUpDownIcon,
  BookOpenIcon,
  PencilSquareIcon,
  TagIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import AboutBox from "./AboutBox";
import InfoBox from "./InfoBox";
import FilledButton from "@/components/global/FilledButton";
import ActivitiesList from "./ActivitiesList";
import TagList from "./TagList";
import IngredientsList from "./IngredientsList";

function CardsGrid() {
  return (
    <div className="mx-auto mb-20 grid max-w-[1200px] grid-cols-2 gap-8">
      <AboutBox
        heading="Personal Info"
        icon={<UserIcon />}
        additionalClass="xxl:col-span-2 animate-[fadeLeft_1s]"
      >
        <div className="mb-8 flex flex-col gap-4">
          <InfoBox dataType="Username">oliwiersellig54</InfoBox>
          <InfoBox dataType="Email">oliwierandrzej.sellig@gmail.com</InfoBox>
          <InfoBox dataType="Phone">+48 514 049 144</InfoBox>
        </div>
        <FilledButton size="lg" additionalClass="self-center">
          <PencilSquareIcon className="h-7 w-7" />
          <span className="sm:text-lg">Edit Info</span>
        </FilledButton>
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
