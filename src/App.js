import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import CakeContainer from './components/CakeContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>React Redux Demo</h1>

        <CakeContainer />
      </div>
    </Provider>
  );
}

export default App;
