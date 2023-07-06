import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UsersList } from "../../data/UsersList";
import { delaySlice } from "./delaySlice";

const initialState = {
  list: [],
  loading: false,
  error: false,
};

const users = UsersList;

export const fetchAllUsers = createAsyncThunk(
  "users/delaySlice",
  async (data) => {
    return await delaySlice(users);
  }
);

export const getSingleUser = createAsyncThunk(
  "users/getSinlgeUser",
  async (id) => {
    return id;
  }
);

export const deleteUser = createAsyncThunk("users/deleteUser", async (id) => {
  return id;
});
export const addUser = createAsyncThunk("users/addUser", async (newUser) => {
  return newUser;
});

export const editUser = createAsyncThunk("users/editUser", async (user) => {
  return user;
});

export const usersSlice = createSlice({
  name: "users",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(fetchAllUsers.pending, (state, action) => {
        console.log("loading");
        state.status = "loading";
    })

      .addCase(fetchAllUsers.fulfilled, (state, action) => {
        console.log("load complete");
        state.status = "succeeded";
        state.list = action.payload;
      })

      .addCase(fetchAllUsers.rejected, (state, action) => {
        console.log("Failure while fetching data!");
        state.status = "failed";
        state.error = action.error.message;
      });

    builder.addCase(getSingleUser.fulfilled, (state, action) => {
      state.singleBooking = state.list.find(
        (booking) => booking.id === action.payload
      );
    });

    builder.addCase(deleteUser.fulfilled, (state, action) => {
      state.list = state.list.filter((user) => user.id !== action.payload);
      console.log(action.payload);
    });
    builder.addCase(addUser.fulfilled, (state, action) => {
      state.list = [...state.list, action.payload];
    });
    builder.addCase(editUser.fulfilled, (state, action) => {
      state.list = state.list.map((user) =>
        user.id === action.payload.id ? action.payload : user
      );
    });
  },
});

export const selectUsers = (state) => state.users.list;
export default usersSlice.reducer;
