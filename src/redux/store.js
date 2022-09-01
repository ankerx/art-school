import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { schoolApi } from "./services/schoolApi";

export const store = configureStore({
  reducer: {
    [schoolApi.reducerPath]: schoolApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(schoolApi.middleware),
});

setupListeners(store.dispatch);
