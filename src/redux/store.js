import { configureStore } from '@reduxjs/toolkit';
import { ContactReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    contacts: ContactReducer,
    filter: filterReducer,
  },
});
