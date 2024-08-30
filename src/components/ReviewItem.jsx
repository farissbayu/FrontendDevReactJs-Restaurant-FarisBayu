/* eslint-disable react/prop-types */
import React from "react";

export default function ReviewItem({ review }) {
  return (
    <div className="flex flex-row shadow">
      <img
        src={review.image}
        alt={`${review.name}'s review`}
        className="h-12 w-16 object-cover"
      />
      <div className="flex flex-col justify-center px-4">
        <p className="text-xs">
          <span>{review.name}</span> - Rating: {review.rating}
        </p>
        <p>{review.text}</p>
      </div>
    </div>
  );
}
