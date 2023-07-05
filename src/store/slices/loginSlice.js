import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  isLogged: false,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {

    login: (state, action) => {
      if (
        action.payload.email === "admin@admin.com" &&
        action.payload.password === "admin"
      ) {
        return {
            ...state,
            email: action.payload.email,
            isLogged: true,
          };
      }  else {
        alert("something went wrong");
        return { ...state, isLogged: false };
      }
    },
    logout : ()=> ({...initialState }),
    update: (state, action) => {
        return { ...state, email: action.payload};
    }
  },
});

export const { login, logout, update } = loginSlice.actions
export default loginSlice.reducer
