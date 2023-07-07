import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { delaySlice } from "./delaySlice";
import { RoomsList } from "../../data/RoomsList";


const rooms = RoomsList;

const initialState = {
  list: [],
  loading: false,
  error: false,
  status: "",
};

export const fetchAllRooms = createAsyncThunk(
  "room/fetchAllRooms",
  async (data) => {
    return await delaySlice(rooms);
  }
);

export const getSingleRoom = createAsyncThunk(
  "room/getSinlgeRoom",
  async (id) => {
    return id;
  }
);
export const deleteRoom = createAsyncThunk("room/deleteRoom", async (id) => {
  return id;
});
export const addRoom = createAsyncThunk("room/addRoom", async (newRoom) => {
  return newRoom;
});

export const editRoom = createAsyncThunk("room/editRoom", async (room) => {
  return room;
});

//-------------------------------------------------------
export const roomSlice = createSlice({
  name: "room",
  initialState,

  extraReducers(builder) {

    builder
      .addCase(fetchAllRooms.pending, (state, action) => {
        console.log("loading");
        state.status = "loading";
      })
      .addCase(fetchAllRooms.fulfilled, (state, action) => {
        console.log("load complete");
        state.status = "succeeded";
        state.list = action.payload;
      })
      .addCase(fetchAllRooms.rejected, (state, action) => {
        console.log("Failure while fetching data!");
        state.status = "failed";
        state.error = action.payload;
      });

    
    builder.addCase(getSingleRoom.fulfilled, (state, action) => {
      state.list = state.list.find((room) => room.id === action.payload);
    });

    builder.addCase(deleteRoom.fulfilled, (state, action) => {
      state.list = state.list.filter((room) => room.id !== action.payload);
    });

    builder.addCase(addRoom.fulfilled, (state, action) => {
      state.list = [...state.list, action.payload];
    });

    builder.addCase(editRoom.fulfilled, (state, action) => {
      state.list = state.list.map((room) =>
        room.id === action.payload.id ? action.payload : room
      );
    });
  },
});

export const selectRoom = (state) => state.room.list;

export default roomSlice.reducer;
