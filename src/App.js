import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router/AppRouter';
import "./App.css";
import { Provider } from 'react-redux';
import { store } from './store/Store';


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
            <div className="App">
              <AppRouter />
            </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
