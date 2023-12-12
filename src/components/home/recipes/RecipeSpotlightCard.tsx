import RecipeCard from "@/components/global/RecipeCard";

interface RecipeSpotlightCardProps {
  index: number;
  iterator: number;
}

function RecipeSpotlightCard({ index, iterator }: RecipeSpotlightCardProps) {
  const active = iterator === index;
  const pos = active
    ? { left: "50%" }
    : index < iterator
      ? { left: `${(index + 1 - iterator) * 100}%` }
      : {
          left: `${(index - iterator) * 100}%`,
          transform: "translate(-100%, -50%) scale(0.9)",
        };

  return (
    <div
      style={pos}
      className={`absolute top-1/2 flex min-h-[360px] w-[360px] -translate-y-1/2  transition-all duration-[1000ms] ease-in-out [&>a>div]:xsm:aspect-[16/10] [&>a]:xsm:min-w-[auto]   ${
        active
          ? "z-20 -translate-x-1/2 scale-105"
          : "sm:scale-60 z-10 scale-90 select-none opacity-70 blur-[2px] grayscale-[80%]"
      }    sm:w-[95%] xsm:px-3`}
    >
      <RecipeCard />
    </div>
  );
}

export default RecipeSpotlightCard;
