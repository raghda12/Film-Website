import { useState } from "react";
import { motion } from "framer-motion";

export default function StarRating({
  maxRating = 5,
  color = "#fbbf24",
  size = 32,
  messages = [],
  defaultRating = 0,
  onSetRating,
}) {
  const [rating, setRating] = useState(defaultRating);
  const [tempRating, setTempRating] = useState(0);

  function handleRating(newRating) {
    setRating(newRating);
    if (onSetRating) onSetRating(newRating);
  }

  return (
    <div className="flex items-center gap-4">
      <div className="flex gap-1">
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            onRate={() => handleRating(i + 1)}
            onHover={() => setTempRating(i + 1)}
            onHoverOut={() => setTempRating(0)}
            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            color={color}
            size={size}
          />
        ))}
      </div>

      <p
        className="font-bold font-mono transition-all duration-200"
        style={{ color: color, fontSize: `${size / 1.5}px` }}
      >
        {messages.length === maxRating
          ? messages[tempRating ? tempRating - 1 : rating - 1]
          : tempRating || rating || ""}
      </p>
    </div>
  );
}

function Star({ onRate, full, onHover, onHoverOut, color, size }) {
  return (
    <motion.span
      role="button"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      onClick={onRate}
      onMouseEnter={onHover}
      onMouseLeave={onHoverOut}
      className="cursor-pointer block transition-colors duration-200"
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill={full ? color : "none"}
        stroke={color}
        className="w-full h-full"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
        />
      </svg>
    </motion.span>
  );
}
