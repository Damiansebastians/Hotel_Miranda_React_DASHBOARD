import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router/AppRouter';
import "./App.css";
import AuthContextProvider from './context/AuthContext';
import { Provider } from 'react-redux';
import { store } from './store/Store';


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AuthContextProvider>
            <div className="App">
              <AppRouter />
            </div>
        </AuthContextProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
