import FilledButton from "../../global/FilledButton";

function Cta() {
  return (
    <section
      id="cta"
      className="cta-background aspect-[22/7] py-40 xl:aspect-22/9 lg:aspect-video md:aspect-4/3 sm:aspect-square sm:py-32 xsm:aspect-auto"
    >
      <div className="fixed-container flex h-full flex-col items-center justify-center">
        <h2 className="mb-10 max-w-xl animate-[fadeLeft_1.4s] text-center font-ubuntu text-5xl font-bold sm:text-4xl xsm:text-3xl">
          <span className="text-white-normal">
            Join the KetoDelicious family{" "}
          </span>
          <span className=" text-jade-normal">for free!</span>
        </h2>
        <div className="animate-[fadeBottom_1.4s]">
          <FilledButton destination="/" size="xl">
            Visit the app
          </FilledButton>
        </div>
      </div>
    </section>
  );
}

export default Cta;
