import { createSlice } from '@reduxjs/toolkit';
import { fetchContact, addContact, deleteContact } from './operations';

const initialStateUser = {
  contacts: {
    items: [],
    isLoading: false,
  },
  filter: '',
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState: initialStateUser.contacts,
  extraReducers: {
    [fetchContact.pending](state) {
      state.isLoading = true;
    },
    [fetchContact.fulfilled](state, action) {
      state.isLoading = false;
      state.items = action.payload;
    },
    [fetchContact.rejected](state) {
      state.isLoading = false;
    },
    [addContact.pending](state) {
      state.isLoading = true;
    },
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.items.push(action.payload);
    },
    [addContact.rejected](state) {
      state.isLoading = false;
    },
    [deleteContact.pending](state) {
      state.isLoading = true;
    },
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      const index = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [deleteContact.rejected](state) {
      state.isLoading = false;
    },
  },
});
export const ContactReducer = contactSlice.reducer;
