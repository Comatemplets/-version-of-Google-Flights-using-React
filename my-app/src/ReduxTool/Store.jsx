import { configureStore } from "@reduxjs/toolkit"; // Import the Redux Toolkit function to configure the store
import DataSlice from "./Slices/DataSlice"; // Import the slice responsible for products

export const Store = configureStore({
  reducer: {
    Data: DataSlice.reducer, // Manages state related to Data
  },
});
