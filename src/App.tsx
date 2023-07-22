import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router/AppRouter";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store/Store";
import { AuthProvider } from "./context/AuthContext";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Provider store={store}>
          <div className="App">
            <AppRouter />
          </div>
        </Provider>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;

