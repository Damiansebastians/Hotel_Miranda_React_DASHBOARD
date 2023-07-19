import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { delaySlice } from "./delaySlice";
import { RoomsList } from "../../data/RoomsList";
import { Room } from "../../Interfaces/RoomInterface";


const rooms = RoomsList;

interface RoomState {
  list: Room[];
  singleRoom: Room | {};
  status: 'loading' | 'succeeded' | 'failed' | null;
  error?: string
}

const initialState: RoomState = {
  list: [],
  singleRoom: {},
  status: null,
  error: "",
};

export const fetchAllRooms = createAsyncThunk(
  "room/fetchAllRooms",
  async () => {
    return await delaySlice(rooms) as Room[];
  }
);

export const getSingleRoom = createAsyncThunk(
  "room/getSinlgeRoom",
  async (id: number) => {
    const fetchSingleRoom =rooms.find(room => room.id === id);
    return await delaySlice(fetchSingleRoom) as Room }
);
export const deleteRoom = createAsyncThunk(
  "rooms/deleteRoom",
   async (id: number) => {
  return id;
});
export const addRoom = createAsyncThunk(
  "rooms/NewRoom",
   async (newRoom: Room) => {
  return newRoom;
});

export const editRoom = createAsyncThunk(
  "rooms/editRoom",
   async (room: Room) => {
  return room;
});

//-------------------------------------------------------
export const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {},
  extraReducers(builder) {

    builder
      .addCase(fetchAllRooms.pending, (state) => {
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
        state.error = action.error.message;
      });

    
    builder.addCase(getSingleRoom.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.singleRoom = action.payload
    });

    builder.addCase(deleteRoom.fulfilled, (state, action) => {
      state.list = state.list.filter((room) => room.id !== action.payload);
    });

    builder
    .addCase(addRoom.fulfilled, (state, action) => {
      state.list = [...state.list, action.payload];
    });

    builder
    .addCase(editRoom.fulfilled, (state, action) => {
      state.list = state.list.map((room) => room.id === action.payload.id ? action.payload : room );
    });
  },
});

export const selectRoom = (state: { room: RoomState }) => state.room.list;
export default roomSlice.reducer;
