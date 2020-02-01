import React from 'react';
import './App.css';
import Questions from './Containers/Introduction';
import { persistor, store } from './store/configureStore';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react';

function App() {
  return (
      <Provider store={store}>
          <PersistGate persistor={persistor}>
            <div className="App">
                <Questions/>
            </div>
          </PersistGate>
      </Provider>
  );
}

export default App;
