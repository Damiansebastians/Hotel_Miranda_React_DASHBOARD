import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router/AppRouter';
import "./App.css";
import AuthContextProvider from './context/AuthContext';

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
          <div className="App">
            <AppRouter />
          </div>
        </AuthContextProvider>
      </BrowserRouter>
  );
}

export default App;
