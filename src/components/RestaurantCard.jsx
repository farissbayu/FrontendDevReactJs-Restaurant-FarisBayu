/* eslint-disable react/prop-types */
import React from "react";
import StarRating from "./StarRating";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

export default function RestaurantCard({ restaurant }) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col bg-gray-100/70 rounded-md">
      <img
        src={restaurant.image_url}
        alt={restaurant.name}
        className="w-full object-cover h-40 rounded-md"
      />
      <div className="px-2 mt-2">
        <p className="text-lg font-medium truncate">{restaurant.name}</p>
      </div>
      <StarRating rating={restaurant.rating} />
      <div className="w-full flex flex-row justify-between mt-2 px-2">
        <p className="text-xs text-gray-500">
          {restaurant.categories[0].title} - {restaurant.price}
        </p>
        {restaurant.is_closed ? (
          <p className="text-xs text-red-500">CLOSED</p>
        ) : (
          <p className="text-xs text-green-500">OPEN NOW</p>
        )}
      </div>
      <Button
        className="mt-8"
        onClick={() => navigate(`/detail/${restaurant.id}`)}
      >
        LEARN MORE
      </Button>
    </div>
  );
}
