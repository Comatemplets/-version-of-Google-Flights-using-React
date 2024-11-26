import { useEffect, useState } from "react";
import Pagination from "../Components/Pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { fetchFlights } from "../ReduxTool/Slices/DataSlice";
import { Link, useParams } from "react-router-dom";

export default function FlightsDetails() {
  const dispatch = useDispatch(); // Hook to dispatch Redux actions
  const flights = useSelector((state) => state.Data.flights); // Selector to get flights data from Redux state
  const [search, setSearch] = useState(""); // State to manage search input
  const [CityName, setCityName] = useState(""); // State to store city name
  const API_KEY = "6ec72e980df196b00b0d0b10a01f3ebb"; // API key for OpenWeatherMap API

  const param = useParams(); // Get route parameters
  console.log(param); // Log route parameters for debugging

  // Find flight data by ID from route parameters
  const flightData = flights.find((e) => e.id == param.flightId);
  console.log(flightData); // Log the selected flight data for debugging

  // Function to get user coordinates and fetch city name
  const getUserCoordinates = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position.coords); // Log coordinates for debugging
        const { latitude, longitude } = position.coords; // Destructure coordinates

        // OpenWeatherMap reverse geocoding API URL
        const REVERSE_GEOCODING_URL = `http://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;

        // Fetch city name using reverse geocoding
        fetch(REVERSE_GEOCODING_URL)
          .then((res) => res.json())
          .then((data) => {
            console.log(data); // Log API response for debugging
            setCityName(data[0]?.name || "Unknown"); // Set city name (fallback to "Unknown" if no data)
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

  // Fetch flights data and user location on component mount
  useEffect(() => {
    dispatch(fetchFlights()); // Fetch flights data from API
    getUserCoordinates(); // Get user location
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div className="explore-page">
      <div className="containeer flex  gap-3">
        <div className="right-content ">
          <div className="flight-content">
            <div className="img-content relative rounded-md overflow-hidden">
              <img src={flightData.content.image.url} alt="" srcset="" />
              <div className="text absolute bottom-0  flex justify-between p-2 w-full">
                <div className="title">
                  <h2 className="text-white font-semibold">
                    {flightData.content.location.name}
                  </h2>
                </div>
                <div className="date">
                  <h2 className="text-white text-sm">
                    Thu, Nov 28 – Wed, Dec 4
                  </h2>
                </div>
              </div>
            </div>
            <div className="find-flights p-5 border rounded-md mt-5 flex flex-col justify-center items-center">
              <h2 className=" font-semibold text-lg mb-3">
                Tarvel from {CityName.name}
              </h2>
              <img
                className="w-96"
                src="https://www.gstatic.com/flights/app/error_white_1080.png"
                alt=""
                srcset=""
              />
              <p className="text-gray-500 mb-3">
                Flights may be available if you fly to alternative airports or
                check nearby dates.
              </p>
              <Link
                className="text-Link text-center p-2 px-5 border rounded-3xl"
                to="/explore">
                Find flights
              </Link>
            </div>
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
