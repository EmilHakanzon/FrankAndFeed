interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  color?: "blue" | "white" | "gray";
  showText?: boolean;
  text?: string;
  className?: string;
}

export default function LoadingSpinner({
  size = "md",
  color = "blue",
  showText = false,
  text = "Loading...",
  className = "",
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "h-4 w-4 border-2",
    md: "h-8 w-8 border-2",
    lg: "h-16 w-16 border-4",
  };
  const colorClasses = {
    blue: "border-gray-200 border-t-blue-600",
    white: "border-white/20 border-t-white",
    gray: "border-gray-300 border-t-gray-600",
  };

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div
        className={`animate-spin rounded-full ${sizeClasses[size]} ${colorClasses[color]}`}
      />
      {showText && <p className="text-gray-600 text-sm mt-2">{text}</p>}
    </div>
  );
}
