function WelcomeHeading() {
  return (
    <header className="flex animate-[fadeBottom_1.2s] flex-col items-center">
      <h1 className="mb-2 font-ubuntu text-7xl font-medium xxl:text-6xl xl:text-5xl sm:text-center">
        Welcome back <span className="text-jade-shade-1 ">Oliwier</span>
      </h1>
      <p className="text-xl font-medium xl:text-lg">
        What&apos;s bringing you here?
      </p>
    </header>
  );
}

export default WelcomeHeading;
