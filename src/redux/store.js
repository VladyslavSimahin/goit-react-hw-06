import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { contactsReducer } from "./contactsSlice";
import { filterReducer } from "./filtersSlice";
const persistedContactsReducer = persistReducer(
  {
    key: "contacts",
    storage,
    whitelist: ["items"],
  },
  contactsReducer
);

const persistedFiltersReducer = persistReducer(
  {
    key: "filters",
    storage,
    whitelist: ["name"],
  },
  filterReducer
);
const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filters: persistedFiltersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);
export { store, persistor };
