import { createSelector } from "@reduxjs/toolkit";

export const getContact = state => state.contacts.items;
export const getContactFilter = state => state.filter;

export const contactsStorage = createSelector(
  [getContact, getContactFilter],
  (contacts, query) => {
    const fiter = query
      ? contacts.filter(contact => contact.name.toLowerCase().includes(query))
      : contacts;

    return fiter;
  }
);
