import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UsersList } from "../../data/UsersList";
import { delaySlice } from "./delaySlice";
import { RootState } from "../Store";
import { User } from "../../Interfaces/UserInterface";

interface UsersState {
  list: User[];
  status: 'loading' | 'succeeded' | 'failed' | null;
  error?: string;
  singleUser: User | null;
}
const users = UsersList;

const initialState: UsersState = {
  list: [],
  status: null,
  error: "",
  singleUser: null,
};

export const fetchAllUsers = createAsyncThunk(
  "users/delaySlice",
  async () => {
    return await delaySlice(users) as User[];
  }
);

export const getSingleUser = createAsyncThunk(
  "users/getSinlgeUser",
  async (id: number) => {
    return id;
  }
);
export const deleteUser = createAsyncThunk(
  "users/deleteUser",
  async (id: number) => {
    return id;
  }
);
export const addUser = createAsyncThunk(
  "users/addUser",
  async (newUser: User) => {
    return newUser;
  }
);

export const editUser = createAsyncThunk(
  "users/editUser",
  async (user: User) => {
    return user;
  }
);

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAllUsers.pending, (state) => {
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
      })

      .addCase(getSingleUser.fulfilled, (state, action) => {
        state.singleUser = state.list.find(
          (user) => user.id === action.payload) || null;
      })

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

export const selectUsers = (state: RootState) => state.usersSlice.list;
export default usersSlice.reducer;
