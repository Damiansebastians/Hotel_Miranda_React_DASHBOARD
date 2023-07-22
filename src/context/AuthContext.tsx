import React, { createContext, useReducer, ReactNode } from "react";

interface AuthState {
  email: string;
  isLogged: boolean;
}
interface LoginPayload {
  email: string;
  password: string;
}

type AuthAction =
  | { type: "Login"; payload: LoginPayload }
  | { type: "Logout" }
  | { type: "Update"; payload: { email: string } };

const initialState: AuthState = {
  email: localStorage.getItem("email") || "",
  isLogged: localStorage.getItem("isLogged") === "true" || false,
};

export const authUser = (state: AuthState, action: AuthAction) => {
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

interface AuthContextValue extends AuthState {
  login: (email: string, password: string) => void;
  logout: () => void;
  updateEmail: (newEmail: string) => void;
}

export const AuthContext = createContext<AuthContextValue>({
  ...initialState,
  login: () => {},
  logout: () => {},
  updateEmail: () => {},
});

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(authUser, initialState);

  const login = (email:string, password:string) => {
    dispatch({ type: "Login", payload: { email, password } });
  };

  const logout = () => {
    dispatch({ type: "Logout" });
  };

  const updateEmail = (newEmail: string) => {
    dispatch({
      type: "Update",
      payload: { email: newEmail },
    });
  };

  const authContextValue: AuthContextValue = {
    ...state,
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
