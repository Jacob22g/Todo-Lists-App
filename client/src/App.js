import React from 'react';

import './App.css';

import Sidemenu from './containers/sidemenu/Sidemenu'
import Todos from './containers/todos/Todos'

const App = () => {

  return (
    <div className="App">
      <Sidemenu />
      <Todos />
    </div>
  );
}

export default App
