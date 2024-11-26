import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// AsyncThunk to fetch nearby airports based on latitude and longitude
export const fetchAirporNearby = createAsyncThunk(
  "DataSlice/fetchAirporNearby", // Action type
  async ({ latitude, longitude }, { rejectWithValue }) => {
    const options = {
      method: "GET",
      url: "https://sky-scrapper.p.rapidapi.com/api/v1/flights/getNearByAirports",
      params: {
        lat: latitude, // Latitude of the location
        lng: longitude, // Longitude of the location
        locale: "en-US", // Locale for the API response
      },
      headers: {
        "x-rapidapi-key": "b22bf7505emshfa294f9e42f86adp1666e5jsn70a4ad6f0ec7", // API key for authentication
        "x-rapidapi-host": "sky-scrapper.p.rapidapi.com", // API host
      },
    };

    try {
      const response = await axios.request(options); // Make the API request
      console.log(response.data); // Log the response for debugging
      return response.data.data.nearby; // Return the list of nearby airports
    } catch (error) {
      console.error(error); // Log any errors
      return rejectWithValue(
        error.response ? error.response.data : error.message
      ); // Handle errors
    }
  }
);

// AsyncThunk to fetch available flights
export const fetchFlights = createAsyncThunk(
  "DataSlice/fetchFlights", // Action type
  async (_, { rejectWithValue }) => {
    const options = {
      method: "GET",
      url: "https://sky-scrapper.p.rapidapi.com/api/v2/flights/searchFlightEverywhere",
      params: {
        originEntityId: "95673320", // Hardcoded origin location
        cabinClass: "economy", // Flight cabin class
        journeyType: "one_way", // Type of journey
        currency: "USD", // Currency for ticket prices
      },
      headers: {
        "x-rapidapi-key": "b22bf7505emshfa294f9e42f86adp1666e5jsn70a4ad6f0ec7", // API key for authentication
        "x-rapidapi-host": "sky-scrapper.p.rapidapi.com", // API host
      },
    };

    try {
      const response = await axios.request(options); // Make the API request
      console.log(response.data.data.results); // Log the response for debugging
      return response.data.data.results; // Return the flight data
    } catch (error) {
      console.error(error); // Log any errors
      return rejectWithValue(
        error.response ? error.response.data : error.message
      ); // Handle errors
    }
  }
);

// AsyncThunk to fetch nearby hotels based on location
export const fetchHotels = createAsyncThunk(
  "DataSlice/fetchHotels", // Action type
  async (_, { rejectWithValue }) => {
    const options = {
      method: "GET",
      url: "https://sky-scrapper.p.rapidapi.com/api/v1/hotels/nearbyMap",
      params: {
        cityId: "27537542", // Hardcoded city ID
        latitude: "40.758144", // Latitude for location
        longitude: "-73.975359", // Longitude for location
        currency: "USD", // Currency for hotel prices
        market: "en-US", // Market for response data
        countryCode: "US", // Country code for hotels
      },
      headers: {
        "x-rapidapi-key": "b22bf7505emshfa294f9e42f86adp1666e5jsn70a4ad6f0ec7", // API key for authentication
        "x-rapidapi-host": "sky-scrapper.p.rapidapi.com", // API host
      },
    };

    try {
      const response = await axios.request(options); // Make the API request
      console.log(response.data.data.poiInfo); // Log the response for debugging
      return response.data.data.poiInfo; // Return the hotel data
    } catch (error) {
      console.error(error); // Log any errors
      return rejectWithValue(
        error.response ? error.response.data : error.message
      ); // Handle errors
    }
  }
);

// Create a slice for managing the data state
export const DataSlice = createSlice({
  name: "DataSlice", // Name of the slice
  initialState: {
    airpors: [], // State for storing nearby airports
    flights: [], // State for storing flight data
    hotels: [], // State for storing hotel data
  },
  reducers: {}, // No synchronous reducers defined
  extraReducers: (builder) => {
    // Handle fulfilled state for fetchAirporNearby
    builder.addCase(fetchAirporNearby.fulfilled, (state, action) => {
      state.airpors = action.payload; // Update state with fetched airports
    });
    // Handle fulfilled state for fetchFlights
    builder.addCase(fetchFlights.fulfilled, (state, action) => {
      state.flights = action.payload; // Update state with fetched flights
    });
    // Handle fulfilled state for fetchHotels
    builder.addCase(fetchHotels.fulfilled, (state, action) => {
      state.hotels = action.payload; // Update state with fetched hotels
    });
  },
});

// Export the reducer as the default export
export default DataSlice;
