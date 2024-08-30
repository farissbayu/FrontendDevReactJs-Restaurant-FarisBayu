import { Star } from "lucide-react";
import React from "react";

export default function StarRating({ rating }) {
  const rate = Math.ceil(rating);
  return (
    <div className="flex flex-row space-x-1 mt-2 px-2">
      {[...Array(rate)].map((_, index) => (
        <Star
          key={index}
          size={16}
          strokeWidth={0.5}
          stroke="#295F98"
          fill="#295F98"
        />
      ))}
      {[...Array(5 - rate)].map((_, index) => (
        <Star key={index} size={16} strokeWidth={0.5} stroke="#295F98" />
      ))}
    </div>
  );
}
