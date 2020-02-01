import React from 'react';
import './App.css';
import Introduction from './Containers/Introduction';
import { Provider } from 'react-redux'

function App() {
  return (
    <div className="App">
        <Introduction/>
    </div>
  );
}

export default App;
