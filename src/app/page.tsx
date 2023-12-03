import Achievements from "@/components/home/achievements/Achievements";
import Cta from "@/components/home/cta/Cta";
import Footer from "@/components/home/footer/Footer";
import Header from "@/components/home/header/Header";
import Hero from "@/components/home/hero/Hero";
import Hiw from "@/components/home/hiw/Hiw";
import Recipes from "@/components/home/recipes/Recipes";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Hiw />
        <Achievements />
        <Recipes />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
