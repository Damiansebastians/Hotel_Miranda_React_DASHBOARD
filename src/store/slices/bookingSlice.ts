import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { delaySlice } from "./delaySlice";
import { BookingsList } from "../../data/BookingsList";
import { Booking } from "../../Interfaces/BookingInterface";
import { RootState } from "../Store";


interface BookingsState {
  list: Booking[];
  singleBooking: Booking | null;
  status: 'loading' | 'succeeded' | 'failed' | null;
  error?: string;
}

const bookings = BookingsList;

const initialState: BookingsState = {
  list: [],
  singleBooking: null,
  status: null,
  error: "",
};

export const fetchAllBookings = createAsyncThunk(
  "bookings/delayFunction",
  async () => {
    return await delaySlice(bookings) as Booking[];
  }
);

//--------------------------------------------------------------------------------
export const getSingleBooking = createAsyncThunk(
  "bookings/getSingleBooking",
  async (id: number) => {
    try {
      const apiRequest = await fetch(`${process.env.REACT_APP_URL}/bookings/${id}`);
      const data = await apiRequest.json();
      return data;
    } catch (error: any) {
      throw new Error("Error fetching booking: " + error.message);
    }
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
      .addCase(fetchAllBookings.pending, (state) => {
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

export const selectBookings = (state: RootState) => state.bookingsSlice.list;
export default bookingsSlice.reducer;
