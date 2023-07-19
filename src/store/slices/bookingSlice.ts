import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { delaySlice } from "./delaySlice.js";
import { BookingsList } from "../../data/BookingsList.js";
import { Booking } from "../../Interfaces/BookingInterface";


interface BookingsState{
  list: Booking[];
  singleBooking: Booking | {};
  status: 'loading' | 'succeeded' | 'failed' | null;
  error?: string;
}

const bookings = BookingsList;

const initialState: BookingsState = {
  list: [],
  singleBooking: {},
  status: null,
  error: "",
};

export const fetchAllBookings = createAsyncThunk(
  "bookings/delayFunction",
  async (data) => {
    return await delaySlice(bookings) as Booking[];
  }
);
export const getSingleBooking = createAsyncThunk(
  "bookings/getSinlgeBooking",
  async (id: number) => {
    const fetchSingleBooking = bookings.find(booking => booking.id === id);
    return await delaySlice(fetchSingleBooking) as Booking;
  }
);
export const deleteBooking = createAsyncThunk(
  "bookings/deleteBooking",
  async (id: number) => {
    return id;
  }
);
export const addBooking = createAsyncThunk(
  "bookings/addBooking",
  async (newRoom: Booking) => {
    return newRoom;
  }
);

export const editBooking = createAsyncThunk(
  "bookings/ediBooking",
  async (room: Booking) => {
    return room;
  }
);

export const bookingsSlice = createSlice({
  name: "bookings",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAllBookings.pending, (state, action) => {
        console.log("loading");
        state.status = "loading";
      })
      .addCase(fetchAllBookings.fulfilled, (state, action) => {
        console.log("load complete");
        state.status = "succeeded";
        state.list = action.payload;
      })
      .addCase(fetchAllBookings.rejected, (state, action) => {
        console.log("Failure while fetching data!");
        state.status = "failed";
        state.error = action.error.message;
      });
    builder.addCase(getSingleBooking.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.singleBooking = action.payload;
    });

    builder.addCase(deleteBooking.fulfilled, (state, action) => {
      state.list = state.list.filter(
        (booking) => booking.id !== action.payload
      );
    });
    builder.addCase(addBooking.fulfilled, (state, action) => {
      state.list = [...state.list, action.payload];
    });
    builder.addCase(editBooking.fulfilled, (state, action) => {
      state.list = state.list.map((booking) =>
        booking.id === action.payload.id ? action.payload : booking
      );
    });
  },
});

export const selectBookings = (state: { bookings: BookingsState }) => state.bookings.list;
export default bookingsSlice.reducer;
