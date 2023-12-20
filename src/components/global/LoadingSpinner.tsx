function LoadingSpinner() {
  return (
    <svg
      className="aspect-square  w-[120px] animate-[rotate_2s_linear_infinite] sm:w-[80px]"
      viewBox="0 0 50 50"
    >
      <circle
        style={{ strokeLinecap: "round" }}
        className="animate-[dash_1.5s_ease-in-out_infinite] stroke-jade-normal"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        stroke-width="4"
      ></circle>
    </svg>
  );
}

export default LoadingSpinner;
