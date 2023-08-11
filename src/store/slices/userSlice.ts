import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../Store";
import { User } from "../../Interfaces/UserInterface";
import { apiCall } from "../../api/apiConnection";

interface UsersState {
  list: User[];
  status: 'loading' | 'succeeded' | 'failed' | null;
  error?: string;
  singleUser: User | null;
}
// const users = UsersList;

const initialState: UsersState = {
  list: [],
  status: null,
  error: "",
  singleUser: null,
};

export const fetchAllUsers = createAsyncThunk(
  "users/delaySlice",
  async () => {
    const response = await apiCall("users", "GET");
    return response;
  }
);

export const getSingleUser = createAsyncThunk(
  "users/getSingleUser",
  async (id: number) => {
    const response = await apiCall(`users/${id}`, "GET");
    return response;
  }
);

export const deleteUser = createAsyncThunk(
  "users/deleteUser",
  async (id: number) => {
    await apiCall(`users/${id}`, "DELETE");
    return id;
  }
);

export const addUser = createAsyncThunk(
  "users/addUser",
  async (newUser: User) => {
    const response = await apiCall("users", "POST", newUser);
    return response;
  }
);

export const editUser = createAsyncThunk(
  "users/editUser",
  async (user: User) => {
    const response = await apiCall(`users/${user.id}`, "PUT", user);
    return response;
  }
);

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAllUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;
      })
      .addCase(fetchAllUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(getSingleUser.fulfilled, (state, action) => {
        state.singleUser = action.payload;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.list = state.list.filter((user) => user.id !== action.payload);
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      .addCase(editUser.fulfilled, (state, action) => {
        const editedUser = action.payload;
        const index = state.list.findIndex((user) => user.id === editedUser.id);
        if (index !== -1) {
          state.list[index] = editedUser;
        }
      });
  },
});

export const selectUsers = (state: RootState) => state.usersSlice.list;
export default usersSlice.reducer;
