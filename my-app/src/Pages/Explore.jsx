import { useEffect, useState } from "react";
import Pagination from "../Components/Pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { fetchFlights } from "../ReduxTool/Slices/DataSlice";
import { Link } from "react-router-dom";

export default function Explore() {
  const dispatch = useDispatch(); // Hook to dispatch actions to the Redux store
  const flights = useSelector((state) => state.Data.flights); // Select flights from the Redux state
  const [search, setSearch] = useState(""); // State for search input
  const [CityName, setCityName] = useState(""); // State for the city name
  const API_KEY = "6ec72e980df196b00b0d0b10a01f3ebb"; // API key for OpenWeatherMap API

  // Function to get user's current geographic coordinates
  const getUserCoordinates = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position.coords); // Log coordinates for debugging
        const { latitude, longitude } = position.coords; // Destructure latitude and longitude
        const REVERSE_GEOCODING_URL = `http://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;

        // Fetch city name using reverse geocoding
        fetch(REVERSE_GEOCODING_URL)
          .then((res) => res.json())
          .then((data) => {
            console.log(data); // Log response for debugging
            setCityName(...data); // Set city name in state (assumes data is an array)
          })
          .catch(() => {
            alert("An error occurred while fetching the coordinates!"); // Alert on fetch failure
          });
      },
      (error) => {
        // Handle geolocation errors
        if (error.code === error.PERMISSION_DENIED) {
          alert("Please turn on location services."); // Alert if permission is denied
        }
      }
    );
  };

  // Filter flights by search term (case-insensitive)
  const filterBySearch = flights.filter((item) => {
    return item.content.location.name
      .toLowerCase()
      .includes(search.toLowerCase()); // Match search term
  });

  // Fetch flight data and get user coordinates on component mount
  useEffect(() => {
    dispatch(fetchFlights()); // Fetch flights data from API
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
            <div className="relative wapper grid md:grid-cols-2 3 gap-3 h-500 ">
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
                      to={`/explore/${e.id}`}
                      className="flight-box flex gap-3 border rounded-md overflow-hidden hover:shadow-md  min-h-40">
                      <div className="flex justify-center items-center image min-w-44 min-h-44 overflow-hidden flex-1">
                        <img
                          className="w-full h-full"
                          src={e.content.image.url}
                          alt=""
                          srcset=""
                        />
                      </div>
                      <div className="text flex flex-col justify-between p-3 flex-1">
                        <div className="title-info">
                          <h2 className="text-md font-semibold">
                            {e.content.location.name}
                          </h2>
                          <span className="text-xs text-gray-500">
                            nov 24 - des 4
                          </span>
                        </div>
                        <div className="information-info flex flex-col text-xs font-semibold">
                          <span>
                            <i className="bx bxs-plane-alt mr-3"></i>
                            {e.content.flightQuotes.cheapest.price}
                          </span>
                          <span>
                            <i className="bx bx-bed  mr-3"></i> MYR 677
                          </span>
                        </div>
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
        <div className="left-content flex-1 hidden lg:block mt-2 w-500 ">
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
