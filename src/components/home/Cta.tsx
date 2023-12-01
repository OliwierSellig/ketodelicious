import FilledButton from "../global/FilledButton";

function Cta() {
  return (
    <section
      id="cta"
      className="py-40 cta-background aspect-[22/7] xl:aspect-22/9 lg:aspect-video md:aspect-4/3 sm:aspect-square xsm:aspect-auto sm:py-32"
    >
      <div className="fixed-container flex flex-col items-center justify-center h-full">
        <h2 className="mb-10 font-bold text-5xl max-w-xl text-center font-ubuntu sm:text-4xl xsm:text-3xl">
          <span className="text-white-normal">
            Join the KetoDelicious family{" "}
          </span>
          <span className=" text-jade-normal">for free!</span>
        </h2>
        <FilledButton destination="/" size="xl">
          Visit the app
        </FilledButton>
      </div>
    </section>
  );
}

export default Cta;
