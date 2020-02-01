import React from 'react';
import './App.css';
import Introduction from './Containers/Introduction';
import { persistor, store } from './store/configureStore';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NewPage from "./Containers/NewPage";

function App() {
  return (
      <Provider store={store}>
          <PersistGate persistor={persistor} loading={""}>
              <Router basename="/">
                <Route exact path="/" component={Introduction} />
                  <Route exact path="/newPage" component={NewPage} />
              </Router>
          </PersistGate>
      </Provider>
  );
}

export default App;
