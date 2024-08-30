/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StarRating from "./components/StarRating";
import { getReview } from "./lib/review";
import ReviewItem from "./components/ReviewItem";

const apiKey = import.meta.env.VITE_YELP_API_KEY;
const apiUrl = import.meta.env.VITE_YELP_API_URL;

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${apiKey}`,
  },
};

export default function DetailPage() {
  const { restaurantId } = useParams();

  const [loading, setLoading] = useState(false);
  const [restaurantData, setRestaurantData] = useState();
  const [review, setReview] = useState([]);

  useEffect(() => {
    async function getRestaurantDetail() {
      setLoading(true);
      try {
        const response = await fetch(
          `${apiUrl}businesses/${restaurantId}`,
          options
        );
        const reviews = getReview();
        console.log(reviews);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setRestaurantData(data);
        setReview(reviews);
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    }

    getRestaurantDetail();
  }, []);

  return (
    <div className="w-full h-screen border-t">
      {loading ? (
        <p className="py-2 px-16">Loading...</p>
      ) : (
        restaurantData && (
          <div className="flex flex-col py-2 px-16">
            <div className="flex flex-row mb-4">
              <img
                src={restaurantData.image_url}
                alt={restaurantData.name}
                className="w-1/3 object-cover"
              />
              <div className="flex flex-col ml-8 space-y-2">
                <h2 className="text-2xl font-bold">{restaurantData.name}</h2>
                <StarRating rating={restaurantData.rating} />
                <p>
                  {restaurantData.price} -{" "}
                  {restaurantData.is_closed ? (
                    <span className="text-xs text-red-500">CLOSED</span>
                  ) : (
                    <span className="text-xs text-green-500">OPEN NOW</span>
                  )}
                </p>
                <a
                  href={restaurantData.url}
                  className="text-blue-500 hover:underline"
                >
                  Go to restaurant page.
                </a>
                <p>Reviews</p>
                <ul className="flex flex-col space-y-4">
                  {review.length !== 0 &&
                    review.map((review, index) => (
                      <ReviewItem key={index} review={review} />
                    ))}
                </ul>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}
