import ActivitiesItem from "./ActivitiesItem";

function ActivitiesList() {
  return (
    <div className="recipe-scroll relative flex-grow overflow-y-scroll  border-b-2 border-solid border-gray-tint-3 ">
      <ul className="absolute left-0 top-0  flex h-full w-full flex-col gap-4 px-2 sm:px-0">
        <ActivitiesItem
          action="Bookmarked"
          item={{ name: "Keto Vanilla Bulletproof", id: "32456esrgsefg" }}
          date="23.12.2023"
        />
        <ActivitiesItem
          action="Created"
          item={{ name: "Garlic Sinach Salmon", id: "32456esrgsefg" }}
          date="21.12.2023"
        />
        <ActivitiesItem
          action="Unbookmarked"
          item={{ name: "Keto Vanilla Bulletproof", id: "32456esrgsefg" }}
          date="07.12.2023"
        />
        <ActivitiesItem
          action="Deleted"
          item={{ name: "Garlic Sinach Salmon", id: "32456esrgsefg" }}
          date="01.01.2024"
        />
        <ActivitiesItem
          action="Deleted"
          item={{ name: "Garlic Sinach Salmon", id: "32456esrgsefg" }}
          date="01.01.2024"
        />
        <ActivitiesItem
          action="Deleted"
          item={{ name: "Garlic Sinach Salmon", id: "32456esrgsefg" }}
          date="01.01.2024"
        />
        <ActivitiesItem
          action="Deleted"
          item={{ name: "Garlic Sinach Salmon", id: "32456esrgsefg" }}
          date="01.01.2024"
        />
        <ActivitiesItem
          action="Deleted"
          item={{ name: "Garlic Sinach Salmon", id: "32456esrgsefg" }}
          date="01.01.2024"
        />
        <ActivitiesItem
          action="Deleted"
          item={{ name: "Garlic Sinach Salmon", id: "32456esrgsefg" }}
          date="01.01.2024"
        />
      </ul>
    </div>
  );
}

export default ActivitiesList;
