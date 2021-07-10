import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import CakeContainer from './components/CakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import ItemContainer from './components/ItemContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>React Redux Demo</h1>

        <CakeContainer />
        <IceCreamContainer />

        <hr/>
        <ItemContainer itemType="cake" />
        <ItemContainer itemType="icecream" />
      </div>
    </Provider>
  );
}

export default App;