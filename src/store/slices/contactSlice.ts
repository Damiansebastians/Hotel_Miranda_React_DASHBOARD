import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Guest } from "../../Interfaces/ContactInterface";
import { RootState } from "../Store";
import { apiCall } from "../../api/apiConnection";

interface ContactsState {
  list: Guest[];
  status: 'loading' | 'succeeded' | 'failed' | null;
  error?: string;
  singleContact: Guest | null;
}

const initialState: ContactsState = {
  list: [],
  status: null,
  error: "",
  singleContact: null,
};

export const fetchAllContacts = createAsyncThunk(
  "contacts/fetchAllContacts",
  async () => {
    const response = await apiCall("contacts", "GET");
    return response;
  }
);

export const getSingleContact = createAsyncThunk(
  "contacts/getSingleContact",
  async (id: number) => {
    const response = await apiCall(`contacts/${id}`, "GET");
    return response;
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id: number) => {
    await apiCall(`contacts/${id}`, "DELETE");
    return id;
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (newContact: Guest) => {
    const response = await apiCall("contacts", "POST", newContact);
    return response;
  }
);

export const editContact = createAsyncThunk(
  "contacts/editContact",
  async (contact: Guest) => {
    const response = await apiCall(`contacts/${contact.id}`, "PUT", contact);
    return response;
  }
);

export const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAllContacts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllContacts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;
      })
      .addCase(fetchAllContacts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(getSingleContact.fulfilled, (state, action) => {
        state.singleContact = action.payload;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.list = state.list.filter((contact) => contact.id !== action.payload);
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      .addCase(editContact.fulfilled, (state, action) => {
        const editedContact = action.payload;
        const index = state.list.findIndex((contact) => contact.id === editedContact.id);
        if (index !== -1) {
          state.list[index] = editedContact;
        }
      });
  },
});

export const selectContacts = (state: RootState) => state.contactsSlice.list;
export default contactsSlice.reducer;
