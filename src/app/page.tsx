import Achievements from "@/components/home/Achievements";
import Cta from "@/components/home/Cta";
import Footer from "@/components/home/Footer";
import Header from "@/components/home/Header";
import Hero from "@/components/home/Hero";
import Hiw from "@/components/home/Hiw";
import Recipes from "@/components/home/Recipes";

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
