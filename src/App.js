import React from 'react'
import axios from 'axios'
import {Route} from 'react-router-dom'

import Header from './components/Header'
import Home from './pages/Home'
import Cart from './pages/Cart'


function App() {
  return (
    <div className="App">
      <Header />
      <Route path="/" exact component={Home}/>
      <Route path="/cart" component={Cart} />
    </div>
  );
}

export default App;
