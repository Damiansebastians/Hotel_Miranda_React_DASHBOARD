import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface LoginState{
  email: string | null;
  isLogged: boolean;
};

interface LoginPayload {
  email: string;
  password: string;
}

const initialState: LoginState = {
  email: "",
  isLogged: false,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<LoginPayload>) => {
      if (
        action.payload.email === "admin@admin.com" &&
        action.payload.password === "admin"
      ) {
        return {
          ...state,
          email: action.payload.email,
          isLogged: true,
        };
      } else {
        alert("Email or password wrong");
        return { ...state, isLogged: false };
      }
    },
    logout: () => ({ ...initialState }),

    update: (state, action: PayloadAction<string>) => {
      return { ...state, email: action.payload };
    },
  },
});

export const { login, logout, update } = loginSlice.actions;
export default loginSlice.reducer;
