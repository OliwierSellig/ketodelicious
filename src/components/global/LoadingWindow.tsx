import LoadingSpinner from "./LoadingSpinner";

interface LoadingWindowProps {
  name?: string;
  additionalClass?: string;
}

function LoadingWindow({
  name = "",
  additionalClass = "",
}: LoadingWindowProps) {
  return (
    <div
      className={`flex h-full w-full flex-col items-center justify-center gap-12 ${additionalClass}`}
    >
      <LoadingSpinner />
      <p className="text-3xl font-medium text-gray-tint-2 sm:text-2xl">
        {name ? `Loading ${name}...` : "Loading..."}
      </p>
    </div>
  );
}

export default LoadingWindow;
