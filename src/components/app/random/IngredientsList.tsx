const list = [
  "Ground Beef",
  "Spinach",
  "Cherry Tomatoes",
  "Soy Sauce",
  "Olive Oil",
  "Broccoli",
];

function IngredientsList() {
  return (
    <div className="mb-8">
      <p className="mb-3 font-ubuntu text-2xl font-medium">Ingredients:</p>
      <ul className="flex flex-wrap gap-2">
        {list.map((item, i) => (
          <li
            key={i}
            className="bg-almond-shade-1 relative cursor-default overflow-hidden rounded-xl px-4 py-2 text-lg [&:hover>span:first-child]:-translate-y-[150%] [&:hover>span:last-child]:top-1/2 [&:hover>span:last-child]:-translate-y-1/2"
          >
            <span className="block transition-all duration-150 ease-linear">
              {item}
            </span>
            <span className="absolute left-1/2 top-full z-20 -translate-x-1/2 transition-all duration-150 ease-linear">
              20g
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default IngredientsList;
