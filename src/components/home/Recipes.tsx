import RecipeCard from "./RecipeCard";
import SectionHeader from "./SectionHeader";
import dish1 from "../../../public/images/dish-1.jpg";
import dish2 from "../../../public/images/dish-2.jpg";
import dish3 from "../../../public/images/dish-3.jpg";

function Recipes() {
  return (
    <section className="pt-14 pb-28 bg-almond-normal shadow-cta-top">
      <div className="fixed-container">
        <SectionHeader subtitle="Recipes">
          So, what are we making today?
        </SectionHeader>
        <div className="grid grid-cols-3 gap-6 pt-16">
          <RecipeCard
            image={dish1}
            cookingTime={25}
            calories={860}
            active={false}
          >
            Grilled Chicken Ceaser Salad
          </RecipeCard>
          <RecipeCard
            image={dish2}
            cookingTime={30}
            calories={920}
            active={true}
          >
            Zucchini Noodles with Pesto and Tomatoes
          </RecipeCard>
          <RecipeCard
            image={dish3}
            cookingTime={15}
            calories={745}
            active={false}
          >
            Salmon with Roasted Vegetables
          </RecipeCard>
        </div>
        <nav></nav>
      </div>
    </section>
  );
}

export default Recipes;
