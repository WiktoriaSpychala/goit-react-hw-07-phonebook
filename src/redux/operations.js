import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://64bd22e92320b36433c771d5.mockapi.io';

export const fetchContact = createAsyncThunk(
    'contacts/fetchAll',
    async () => {
            const response = await axios.get('/contacts');
            return response.data;
        } 
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, phone }) => {
      const response = await axios.post('/contacts', { name, phone });
      return response.data;
    } 
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContacts',
  async contactId => {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    }
);