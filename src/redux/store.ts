import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./slicers/themeSlice";
import profileSlice from "./slicers/profileSlice";

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    profile: profileSlice
  },
});
