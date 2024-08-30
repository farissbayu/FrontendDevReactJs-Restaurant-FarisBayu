import { useEffect, useState } from "react";
import { Button } from "./components/ui/button";
import Radio from "./components/Radio";
import Dropdown from "./components/Dropdown";
import RestaurantCard from "./components/RestaurantCard";

const apiKey = import.meta.env.VITE_YELP_API_KEY;
const apiUrl = import.meta.env.VITE_YELP_API_URL;

const priceOptions = [
  { value: "$", label: "$" },
  { value: "$$", label: "$$" },
  { value: "$$$", label: "$$$" },
  { value: "$$$$", label: "$$$$" },
];

const categoryOptions = [
  { value: "newamerican", label: "New American" },
  { value: "korean", label: "Korean" },
  { value: "french", label: "French" },
  { value: "thai", label: "Thai" },
];

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${apiKey}`,
  },
};

export default function HomePage() {
  const [isOpenNow, setIsOpenNow] = useState(false);
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  const [loading, setLoading] = useState(false);
  const [restaurants, setRestaurants] = useState([]);

  function handleIsOpenChange(newValue) {
    setIsOpenNow(newValue);
  }

  function handlePriceChange(newValue) {
    setPrice(newValue);
  }

  function handleCategoryChange(newValue) {
    setCategory(newValue);
  }

  function handleReset() {
    setIsOpenNow(false);
    setPrice("");
    setCategory("");
  }

  useEffect(() => {
    async function getRestaurants() {
      setLoading(true);
      try {
        const response = await fetch(
          `${apiUrl}businesses/search?location=NYC&categories=${category}&sort_by=best_match&limit=48`,
          options
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setRestaurants(data.businesses);
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    }

    getRestaurants();
  }, [category]);

  let filteredRestaurants = restaurants || [];
  if (isOpenNow) {
    filteredRestaurants = filteredRestaurants.filter(
      (restaurant) => restaurant.is_closed === false
    );
  }
  if (price !== "") {
    filteredRestaurants = filteredRestaurants.filter(
      (restaurant) => restaurant.price === price
    );
  }

  return (
    <div className="w-full h-screen">
      <div className="border-y flex flex-row py-2 px-16 mb-4">
        <div className="flex flex-row grow items-center space-x-4">
          <p className="text-xs text-gray-500">Filter By:</p>
          <Radio
            isChecked={isOpenNow}
            onCheckedChange={handleIsOpenChange}
            label="Open now"
          />
          <Dropdown
            label="Price"
            options={priceOptions}
            value={price}
            handleChange={handlePriceChange}
          />
          <Dropdown
            label="Category"
            options={categoryOptions}
            value={category}
            handleChange={handleCategoryChange}
          />
        </div>
        <Button variant="outline" onClick={handleReset}>
          CLEAR ALL
        </Button>
      </div>
      <div className="flex flex-col py-2 px-16 ">
        <h2 className="text-2xl">Restaurant List</h2>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-4">
          {loading ? (
            "Loading..."
          ) : filteredRestaurants.length === 0 ? (
            <p>No restaurant in current filter</p>
          ) : (
            filteredRestaurants.map((item) => (
              <RestaurantCard key={item.id} restaurant={item} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
