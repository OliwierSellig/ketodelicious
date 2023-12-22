interface LoadingSpinnerProps {
  size?: "md" | "lg";
}

function LoadingSpinner({ size = "lg" }: LoadingSpinnerProps) {
  return (
    <svg
      className={`aspect-square ${
        size === "md" ? "w-16 sm:w-10" : size === "lg" ? "w-28 sm:w-20" : ""
      }   animate-[rotate_2s_linear_infinite]`}
      viewBox="0 0 50 50"
    >
      <circle
        style={{ strokeLinecap: "round" }}
        className="animate-[dash_1.5s_ease-in-out_infinite] stroke-jade-normal"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        strokeWidth="4"
      ></circle>
    </svg>
  );
}

export default LoadingSpinner;
