import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHotels } from "../ReduxTool/Slices/DataSlice";
import { Link, useParams } from "react-router-dom";

export default function HotelDetails() {
  const dispatch = useDispatch(); // Hook to dispatch Redux actions
  const Hotels = useSelector((state) => state.Data.hotels); // Selector to access hotels data from Redux
  const [search, setSearch] = useState(""); // State for search input
  const [CityName, setCityName] = useState(""); // State for city name
  const API_KEY = "6ec72e980df196b00b0d0b10a01f3ebb"; // API key for OpenWeatherMap API

  const param = useParams(); // Retrieve route parameters
  console.log(param); // Debugging: Log route parameters

  // Find hotel data by entityId from route parameters
  const HotelData = Hotels.find((e) => e.entityId == param.hotelId);
  console.log(HotelData); // Debugging: Log the selected hotel data

  // Function to get user's coordinates and fetch city name
  const getUserCoordinates = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position.coords); // Debugging: Log user's coordinates
        const { latitude, longitude } = position.coords;

        // OpenWeatherMap reverse geocoding API URL
        const REVERSE_GEOCODING_URL = `http://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;

        // Fetch city name using reverse geocoding
        fetch(REVERSE_GEOCODING_URL)
          .then((res) => res.json())
          .then((data) => {
            console.log(data); // Debugging: Log API response
            setCityName(data[0]?.name || "Unknown"); // Set city name, fallback to "Unknown"
          })
          .catch(() => {
            alert("An error occurred while fetching the coordinates!"); // Alert on fetch failure
          });
      },
      (error) => {
        // Handle geolocation errors
        if (error.code === error.PERMISSION_DENIED) {
          alert("Please turn on location services."); // Alert if location permission is denied
        }
      }
    );
  };

  // Fetch hotels data and user's location on component mount
  useEffect(() => {
    dispatch(fetchHotels()); // Fetch hotels data from API
    getUserCoordinates(); // Get user's location
  }, []); // Empty dependency array ensures this runs only once
  return (
    <div className="explore-page">
      <div className="containeer flex  gap-3">
        <div className="right-content flex-1 ">
          <div className="flex justify-between my-5">
            <h2 className="sm:text-2xl text-lg font-semibold">
              {HotelData.poiName}
            </h2>
            <div className="flex gap-3">
              <button className="text-Link p-2 border rounded-3xl">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  focusable="false"
                  className="Auu9lc NMm5M hhikbc fill-Link">
                  <path d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path>
                </svg>
              </button>
              <button className=" flex gap-2 items-center text-Link p-1 px-3 border rounded-3xl">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  focusable="false"
                  className="EZLmAd NMm5M fill-Link">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                </svg>
                close
              </button>
            </div>
          </div>
          <div className="mb-3">
            <ul className="hotel-links flex gap-5 border-b font-semibold">
              <li className="active pb-3">
                <button>Ovarview</button>
              </li>
              <li className="pb-3">
                <button>Prices</button>
              </li>
              <li className="pb-3">
                <button>Reviews</button>
              </li>
              <li className="pb-3">
                <button>Photos</button>
              </li>
              <li className="pb-3">
                <button>About</button>
              </li>
            </ul>
          </div>
          <div className="p-5 border rounded-md">
            <span className="flex mb-2 gap-2 items-center text-xs text-gray-600">
              {HotelData.reviewScore}
              <div className="flex">
                <i className="bx bxs-star text-orange-400"></i>
                <i className="bx bxs-star text-orange-400"></i>
                <i className="bx bxs-star text-orange-400"></i>
                <i className="bx bxs-star text-orange-400"></i>
                <i className="bx bxs-star-half text-orange-400"></i>
              </div>
              ({HotelData.score})
            </span>
            <span className="pt-4 text-gray-500">{HotelData.address}</span>
            <div className="flex flex-wrap gap-3 mt-4">
              <button className="text-Link flex gap-2 items-center p-1 px-4 border rounded-3xl">
                <i className="bx bxs-direction-left"></i>
                Directions
              </button>
              <button className="text-Link flex gap-2 items-center p-1 px-4 border rounded-3xl">
                <i className="bx bx-save"></i>
                Save
              </button>
              <button className="text-Link flex gap-2 items-center p-1 px-4 border rounded-3xl">
                <i className="bx bx-share-alt"></i>
                Share
              </button>
              <button className="text-white bg-Link flex gap-2 items-center p-1 px-4 border rounded-3xl">
                Check availability
              </button>
            </div>
          </div>
          <div className="flex gap-2 flex-wrap justify-center my-3 p-3 border rounded-md">
            <img
              src={HotelData.imageUrls?.[0] || "default-image-url.jpg"}
              alt=""
              srcset=""
              className="w-60 rounded-md"
            />
            <img
              src={HotelData.imageUrls?.[1] || "default-image-url.jpg"}
              alt=""
              srcset=""
              className="w-60 rounded-md"
            />
            <img
              src={HotelData.imageUrls?.[2] || "default-image-url.jpg"}
              alt=""
              srcset=""
              className="w-60 rounded-md"
            />
          </div>
        </div>
        <div className="left-content hidden lg:block  min-w-500 ">
          <iframe
            className="rounded-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          />
        </div>
      </div>
    </div>
  );
}
