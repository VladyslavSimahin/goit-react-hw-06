import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = {
  items: [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ],
};

const contsactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: {
      reducer: (state, action) => {
        state.items.push(action.payload);
      },
      prepare: (oldPlayload) => {
        return {
          payload: {
            ...oldPlayload,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
      const contactId = action.payload;
      state.items = state.items.filter((contact) => contact.id !== contactId);
    },
  },
});
export const { addContact, deleteContact } = contsactsSlice.actions;
export const contactsReducer = contsactsSlice.reducer;
export const selectContacts = (state) => state.contacts.items;
export default contsactsSlice;
