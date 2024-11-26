import { useEffect, useState } from "react";
import Pagination from "../Components/Pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { fetchFlights, fetchHotels } from "../ReduxTool/Slices/DataSlice";
import { Link } from "react-router-dom";

export default function Hotels() {
  const dispatch = useDispatch(); // Hook to dispatch Redux actions
  const Hotels = useSelector((state) => state.Data.hotels); // Selector to get hotels data from Redux state
  const [search, setSearch] = useState(""); // State to manage search input
  const [CityName, setCityName] = useState(""); // State to store the city name
  const API_KEY = "6ec72e980df196b00b0d0b10a01f3ebb"; // API key for OpenWeatherMap API

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
            console.log(data); // Log response for debugging
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

  // Filter hotels based on search input (case-insensitive)
  const filterBySearch = Hotels.filter((item) => {
    return item.poiName.toLowerCase().includes(search.toLowerCase());
  });

  // Fetch hotels data and user location on component mount
  useEffect(() => {
    dispatch(fetchHotels()); // Fetch hotels data from API
    getUserCoordinates(); // Get user location
  }, []); // Empty dependency array ensures this runs only once

  // start pagenetion
  const [currentPage, setCurrentPage] = useState(1); // State for current page
  const flightsPerPage = 12; // flights to display per page

  // Calculate index range for flights on the current page
  const indexOfLastProduct = currentPage * flightsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - flightsPerPage;

  // Get the flights to display on the current page
  const currentflights = filterBySearch.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  console.log(CityName);
  // Function to handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className="explore-page">
      <div className="containeer flex  gap-3">
        <div className="content-wapper ">
          <div className="right-content flex-1 overflow-y-scroll no-scrollbar">
            <div className=" relative flex gap-3 bg-white p-4 pb-0 rounded-md ">
              <div className="relative mb-6  w-full">
                <div className="absolute inset-y-0 start-0 flex items-center p-3 pointer-events-none">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    focusable="false"
                    className=" NMm5M fill-Link">
                    <path d="M20.49 19l-5.73-5.73C15.53 12.2 16 10.91 16 9.5A6.5 6.5 0 1 0 9.5 16c1.41 0 2.7-.47 3.77-1.24L19 20.49 20.49 19zM5 9.5C5 7.01 7.01 5 9.5 5S14 7.01 14 9.5 11.99 14 9.5 14 5 11.99 5 9.5z"></path>
                  </svg>
                </div>
                <input
                  type="text"
                  id="input-group-1"
                  className="bg-gray-50 border focus:border-2 focus:border-blue-500 border-gray-300 text-gray-900 text-md rounded-lg block w-full p-4 hover:border-gray-400 pl-10 outline-none "
                  placeholder={`Near ${CityName.name}`}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>
            <div className="filter-content my-4 flex flex-wrap gap-3">
              <div className="filter-box flex items-center gap-2 text-Link font-semibold text-sm">
                <i className="bx bx-filter"></i>
                All Filter
              </div>
              <div className="flex items-center gap-2  font-semibold border p-2 rounded-md text-xs">
                <i className="bx bx-money"></i>
                Under 1,000 $
              </div>
              <div className="flex items-center gap-2  font-semibold border p-2 rounded-md text-xs">
                <i className="bx bx-swim"></i>
                Pool
              </div>
              <div className="flex items-center gap-2  font-semibold border p-2 rounded-md text-xs">
                <i className="bx bx-wifi"></i>
                Free Wifi
              </div>
              <div className="flex items-center gap-2  font-semibold border p-2 rounded-md text-xs">
                <i className="bx bx-coffee-togo"></i>
                Free breackfast
              </div>
              <div className="flex items-center gap-2  font-semibold border p-2 rounded-md text-xs">
                <i className="bx bx-star"></i>
                Guset rating
              </div>
              <div className="flex items-center gap-2  font-semibold border p-2 rounded-md text-xs">
                <i className="bx bx-money"></i>
                Price
              </div>

              <div className="flex items-center gap-2  font-semibold border p-2 rounded-md text-xs">
                <i className="bx bx-purchase-tag-alt"></i>
                Offers
              </div>
            </div>
            <div className="relative wapper grid md:grid-cols-1 3 gap-3 h-500 ">
              {currentflights.length === 0 ? (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-row gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-700 animate-bounce"></div>
                  <div className="w-2 h-2 rounded-full bg-blue-700 animate-bounce [animation-delay:-.3s]"></div>
                  <div className="w-2 h-2 rounded-full bg-blue-700 animate-bounce [animation-delay:-.5s]"></div>
                </div>
              ) : (
                currentflights.map((e) => {
                  return (
                    <Link
                      to={`/hotels/${e.entityId}`}
                      className="group flight-box flex gap-3 border rounded-md overflow-hidden min-h-56">
                      <div className="relative flex justify-center items-center image w-52 min-h-44 overflow-hidden ">
                        <img
                          className="w-full h-full group-hover:opacity-0  z-10 transition duration-300"
                          src={e.imageUrls?.[0] || "default-image-url.jpg"}
                          alt=""
                          srcset=""
                        />
                        <img
                          className="w-full h-full absolute"
                          src={e.imageUrls?.[2] || "default-image-url.jpg"}
                          alt=""
                          srcset=""
                        />
                      </div>
                      <div className="text flex flex-col justify-between p-3 flex-1">
                        <div className="title-info">
                          <h2 className="text-md font-semibold">{e.poiName}</h2>
                          <span className="text-xs text-gray-500">
                            {e.reviewScore}{" "}
                            <i className="bx bxs-star text-orange-400 mr-2"></i>
                            ({e.score})
                          </span>
                        </div>
                        <div className="information-info grid grid-cols-2 gap-1 text-small font-semibold">
                          <span className="flex gap-2 text-gray-500">
                            <i className="bx bx-swim"></i>
                            Pool
                          </span>
                          <span className="flex gap-2 text-gray-500">
                            <i className="bx bx-wifi"></i>
                            Free Wifi
                          </span>
                          <span className="flex gap-2 text-gray-500">
                            <i className="bx bx-coffee-togo"></i>
                            Free breackfast
                          </span>
                          <span className="flex gap-2 text-gray-500">
                            <i className="bx bx-purchase-tag-alt"></i>
                            Offers
                          </span>
                        </div>
                        <Link
                          to={`/hotels/${e.entityId}`}
                          className="text-Link my-4 w-fit p-2 px-4 border rounded-3xl ">
                          View details
                        </Link>
                      </div>
                    </Link>
                  );
                })
              )}
            </div>
          </div>
          <Pagination
            totalflights={filterBySearch.length}
            flightsPerPage={flightsPerPage}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
        <div className="left-content flex-1 hidden lg:block mt-2 ">
          <iframe
            className="rounded-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
            height="100%"
            width="100%"
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
