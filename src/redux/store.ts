import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./slicers/themeSlice";

export const store = configureStore({
  reducer: {
    theme: themeSlice,
  },
});
