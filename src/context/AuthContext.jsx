import React, { createContext, useReducer } from "react";

export const AuthContext = createContext();

const initialState = {
  email: "",
  isLogged: false,
};

export const authUser = (state, action) => {
  switch (action.type) {
    case "Login":
      if (
        action.payload.email === "admin@admin.com" &&
        action.payload.password === "admin"
      ) {
        localStorage.setItem("email", action.payload.email);
        localStorage.setItem("isLogged", "true");
        return {
          ...state,
          email: action.payload.email,
          isLogged: true,
        };
      } else {
        alert("Email or password wrong");
        return { ...state, isLogged: false };
      }
    case "Logout":
      localStorage.removeItem("email");
      localStorage.removeItem("isLogged");
      return {
        ...state,
        email: "",
        isLogged: false,
      };
    case "Update":
      return {
        ...state,
        email: action.payload.email,
      };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authUser, initialState);

  const login = (email, password) => {
    dispatch({ type: "Login", payload: { email, password } });
  };

  const logout = () => {
    dispatch({ type: "Logout" });
  };

  const updateEmail = (newEmail) => {
    dispatch({
      type: "Update",
      payload: { email: newEmail },
    });
  };

  const authContextValue = {
    email: state.email,
    isLogged: state.isLogged,
    login,
    logout,
    updateEmail,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
