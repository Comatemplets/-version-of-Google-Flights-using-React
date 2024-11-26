import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchAirporNearby } from "../ReduxTool/Slices/DataSlice"; // Assuming fetchAirporNearby is imported from the slice

export default function Flights() {
  const dispatch = useDispatch(); // Hook to dispatch Redux actions
  const [CityName, setCityName] = useState(""); // State to store the city name
  const API_KEY = "6ec72e980df196b00b0d0b10a01f3ebb"; // API key for OpenWeatherMap API
  const Airports = useSelector((state) => state.Data.airpors); // Selector to get airports data from Redux state
  console.log(Airports); // Log airports for debugging

  useEffect(() => {
    const getUserLocationAndFetch = async () => {
      // Use Geolocation API to get the user's current location
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords; // Destructure coordinates
          dispatch(fetchAirporNearby({ latitude, longitude })); // Dispatch Redux action to fetch nearby airports
        },
        (error) => {
          console.error("Error getting location:", error); // Log location errors
        }
      );
    };

    getUserLocationAndFetch(); // Fetch user location and nearby airports
    getUserCoordinates(); // Fetch city name from coordinates
  }, []); // Empty dependency array ensures this runs only once

  // Function to fetch city name using reverse geocoding
  const getUserCoordinates = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords; // Get user's coordinates
        console.log(position.coords); // Log coordinates for debugging

        // OpenWeatherMap reverse geocoding API URL
        const REVERSE_GEOCODING_URL = `http://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;

        // Fetch city name from API
        fetch(REVERSE_GEOCODING_URL)
          .then((res) => res.json())
          .then((data) => {
            console.log(data); // Log response for debugging
            setCityName(data[0]?.name || "Unknown"); // Set city name (use first result)
          })
          .catch(() => {
            alert("An error occurred while fetching the coordinates!"); // Alert on fetch failure
          });
      },
      (error) => {
        // Handle location errors
        if (error.code === error.PERMISSION_DENIED) {
          alert("Please turn on location services."); // Alert if location permission is denied
        }
      }
    );
  };

  return (
    <section className="landing w-full">
      <div className="landing-img mb-10">
        <img
          src="https://www.gstatic.com/travel-frontend/animation/hero/flights_nc_4.svg"
          alt="landing-img"
          srcset=""
        />
        <h1 className="text-6xl font-normal text-center">Flights</h1>
      </div>
      <div className="containeer">
        <div className="search-box relative flex flex-col md:flex-row gap-3 bg-white p-7 rounded-md mb-10">
          <div className="relative mb-6 w-full">
            <div className="absolute inset-y-0 start-0 flex items-center p-3 pointer-events-none">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                focusable="false"
                className="IILp3 kmKQme LKTCxe NMm5M fill-gray-500">
                <path d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12zm10 6c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6z"></path>
              </svg>
            </div>
            <input
              type="text"
              id="input-group-1"
              className="bg-gray-50 border focus:border-2 focus:border-blue-500 border-gray-300 text-gray-900 text-md rounded-lg block w-full p-4 hover:border-gray-400 pl-10 outline-none "
              placeholder="City"
              value={CityName.name}
            />
          </div>
          <div className="relative mb-6  w-full">
            <div className="absolute inset-y-0 start-0 flex items-center p-3 pointer-events-none">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                focusable="false"
                className="IILp3 oTFJue LKTCxe NMm5M fill-gray-500">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"></path>
                <circle cx="12" cy="9" r="2.5"></circle>
              </svg>
            </div>
            <input
              type="text"
              id="input-group-1"
              className="bg-gray-50 border focus:border-2 focus:border-blue-500 border-gray-300 text-gray-900 text-md rounded-lg block w-full p-4 hover:border-gray-400 pl-10 outline-none "
              placeholder="Where to ?"
            />
          </div>
          <div className="relative flex mb-6  w-full">
            <div className="absolute inset-y-0 start-0 flex items-center p-3 pointer-events-none">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                focusable="false"
                className=" NMm5M fill-gray-500 ">
                <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"></path>
                <path d="M8 11c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm4 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm4 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z"></path>
              </svg>
            </div>
            <input
              type="text"
              id="input-group-1"
              className="bg-gray-50 border focus:border-2 focus:border-blue-500 border-gray-300 text-gray-900 text-md rounded-lg block w-full p-4 hover:border-gray-400 pl-10 outline-none rounded-e-none "
              placeholder="City"
            />
            <input
              type="text"
              id="input-group-1"
              className="bg-gray-50 border focus:border-2 focus:border-blue-500 border-gray-300 text-gray-900 text-md rounded-lg block w-full p-4 hover:border-gray-400 pl-10 outline-none rounded-s-none "
              placeholder="City"
            />
          </div>
          <button className="absolute flex gap-2 justify-center items-center left-1/2  -translate-x-1/2 -bottom-3 p-2 px-4  bg-blue-500 text-white rounded-3xl">
            <i className="bx bx-search"></i>
            Explore
          </button>
        </div>
        <div>
          <h2 className="text-2xl font-semibold my-4">Cheap flights</h2>
          <h2 className="text-lg font-semibold">Popular airports Nearby</h2>

          <div className="relative grid grid-cols-1 sm:grid-cols-3 gap-3 min-h-40">
            {Airports.length == 0 ? (
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-row gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-700 animate-bounce"></div>
                <div className="w-2 h-2 rounded-full bg-blue-700 animate-bounce [animation-delay:-.3s]"></div>
                <div className="w-2 h-2 rounded-full bg-blue-700 animate-bounce [animation-delay:-.5s]"></div>
              </div>
            ) : (
              Airports.map((e) => {
                return (
                  <div className="flex p-3 gap-3 items-center">
                    <i className="bx bxs-plane-alt text-white flex justify-center items-center bg-blue-400 w-6 h-6 rounded-full "></i>
                    <div className="text">
                      <div className="title font-semibold">
                        {e.presentation.suggestionTitle}
                      </div>
                      <div className="flex gap-3 text-small">
                        <span>{e.presentation.subtitle} </span>
                        <span>
                          <i className="bx bx-car"></i> 4 hr 51 min
                        </span>
                        <span>
                          <i className="bx bxs-map"></i> 327 km
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
        <div>
          <h2 className="font-semibold text-xl my-4">
            Useful tools to help you find the best deals
          </h2>
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="flex flex-col gap-4 w-full flex-1 ">
              <div className="box flex items-center gap-2 h-44 p-5 bg-hoverLink border rounded-md">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  focusable="false"
                  className=" NMm5M fill-Link">
                  <path
                    d="M8 33.333a2.889 2.889 0 0 1-2.119-.88A2.889 2.889 0 0 1 5 30.332v-21c0-.825.294-1.53.881-2.118A2.889 2.889 0 0 1 8 6.333h1.5v-3h3v3h12v-3h3v3H29c.825 0 1.531.294 2.119.882.587.587.881 1.293.881 2.118v21c0 .825-.294 1.532-.881 2.12a2.889 2.889 0 0 1-2.119.88H8Zm0-3h21v-15H8v15Zm0-18h21v-3H8v3Zm10.5 9c-.425 0-.781-.143-1.069-.43a1.452 1.452 0 0 1-.431-1.07c0-.425.144-.78.431-1.068a1.451 1.451 0 0 1 1.069-.432c.425 0 .781.144 1.069.432.287.287.431.643.431 1.068 0 .425-.144.782-.431 1.07a1.451 1.451 0 0 1-1.069.43Zm-6 0c-.425 0-.781-.143-1.069-.43a1.452 1.452 0 0 1-.431-1.07c0-.425.144-.78.431-1.068a1.451 1.451 0 0 1 1.069-.432c.425 0 .781.144 1.069.432.287.287.431.643.431 1.068 0 .425-.144.782-.431 1.07a1.452 1.452 0 0 1-1.069.43Zm12 0c-.425 0-.781-.143-1.069-.43a1.452 1.452 0 0 1-.431-1.07c0-.425.144-.78.431-1.068a1.451 1.451 0 0 1 1.069-.432c.425 0 .781.144 1.069.432.287.287.431.643.431 1.068 0 .425-.144.782-.431 1.07a1.452 1.452 0 0 1-1.069.43Zm-6 6c-.425 0-.781-.143-1.069-.43a1.452 1.452 0 0 1-.431-1.07c0-.425.144-.78.431-1.068a1.451 1.451 0 0 1 1.069-.432c.425 0 .781.144 1.069.432.287.287.431.643.431 1.068 0 .425-.144.782-.431 1.07a1.451 1.451 0 0 1-1.069.43Zm-6 0c-.425 0-.781-.143-1.069-.43a1.452 1.452 0 0 1-.431-1.07c0-.425.144-.78.431-1.068a1.451 1.451 0 0 1 1.069-.432c.425 0 .781.144 1.069.432.287.287.431.643.431 1.068 0 .425-.144.782-.431 1.07a1.452 1.452 0 0 1-1.069.43Zm12 0c-.425 0-.781-.143-1.069-.43a1.452 1.452 0 0 1-.431-1.07c0-.425.144-.78.431-1.068a1.451 1.451 0 0 1 1.069-.432c.425 0 .781.144 1.069.432.287.287.431.643.431 1.068 0 .425-.144.782-.431 1.07a1.452 1.452 0 0 1-1.069.43Z"
                    fill="#1A73E8"></path>
                </svg>
                <div className="text">
                  <h3>Find the cheapest days to fly</h3>
                  <p>
                    The Date grid and Price graph make it easy to see the best
                    flight deals
                  </p>
                </div>
              </div>
              <div className="box flex items-center gap-2 h-44 p-5 bg-hoverLink border rounded-md">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  focusable="false"
                  className=" NMm5M fill-Link">
                  <path
                    d="M38.333 13.333c0 1.834-1.5 3.334-3.333 3.334a2.833 2.833 0 0 1-.85-.117l-5.933 5.917c.083.266.116.566.116.866 0 1.834-1.5 3.334-3.333 3.334a3.343 3.343 0 0 1-3.333-3.334c0-.3.033-.6.116-.866l-4.25-4.25a2.944 2.944 0 0 1-.866.116c-.3 0-.6-.033-.867-.116l-7.583 7.6c.083.266.116.55.116.85C8.333 28.5 6.833 30 5 30a3.343 3.343 0 0 1-3.333-3.333c0-1.834 1.5-3.334 3.333-3.334.3 0 .583.034.85.117l7.6-7.583a2.946 2.946 0 0 1-.117-.867c0-1.833 1.5-3.333 3.334-3.333C18.5 11.667 20 13.167 20 15c0 .3-.033.6-.117.867l4.25 4.25C24.4 20.033 24.7 20 25 20c.3 0 .6.033.867.117l5.916-5.934a2.833 2.833 0 0 1-.116-.85C31.667 11.5 33.167 10 35 10c1.833 0 3.333 1.5 3.333 3.333Z"
                    fill="#1A73E8"></path>
                </svg>
                <div className="text">
                  <h3>Find the cheapest days to fly</h3>
                  <p>
                    The Date grid and Price graph make it easy to see the best
                    flight deals
                  </p>
                </div>
              </div>
              <div className="box flex items-center gap-2 h-44 p-5 bg-hoverLink border rounded-md">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  focusable="false"
                  className=" NMm5M fill-Link">
                  <g clip-path="url(#a)">
                    <path
                      d="M24.667 21.333v4.5h-12v-10.5c0-3.315 2.685-6 6-6 1.275 0 2.46.39 3.42 1.08l2.145-2.145a8.805 8.805 0 0 0-3.315-1.635v-1.05a2.247 2.247 0 0 0-2.25-2.25 2.247 2.247 0 0 0-2.25 2.25v1.05a8.98 8.98 0 0 0-6.75 8.7v10.5h-3v3h24v-3h-3v-4.5h-3Zm-6 12c1.65 0 3-1.35 3-3h-6c0 1.65 1.35 3 3 3Zm18-21h-4.5v-4.5h-3v4.5h-4.5v3h4.5v4.5h3v-4.5h4.5v-3Z"
                      fill="#1A73E8"></path>
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path fill="#fff" d="M0 0h40v40H0z"></path>
                    </clipPath>
                  </defs>
                </svg>
                <div className="text">
                  <h3>Find the cheapest days to fly</h3>
                  <p>
                    The Date grid and Price graph make it easy to see the best
                    flight deals
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <h1 className="text-lg font-semibold mb-3">
                Insightful tools help you choose your trip dates
              </h1>
              <p className="text-gray-500 mb-3">
                If your travel plans are flexible, use the form above to start
                searching for a specific trip. Then, play around with the Date
                grid and Price graph options on the Search page to find the
                cheapest days to get to your destination – and back again for
                round trips.
              </p>
              <img
                className="w-2/4 m-auto"
                src="https://www.gstatic.com/flights/app/lp/dates_benefits_light.svg"
                alt=""
                srcset=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
