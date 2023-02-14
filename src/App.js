import React from 'react'
import Home from './Home/Home';
import Context from './Context/Context';

function App() {
  return (
    <Context>
      <Home/>
    </Context>
  );
}

export default App;
