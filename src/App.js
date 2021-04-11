import React from 'react'
import {Route} from 'react-router-dom'


import Header from './components/Header'
import Home from './pages/Home'
import Cart from './pages/Cart'



function App() {
  return (
    <div className="App">
      <Header />
      <Route path="/" exact component={Home}/>
      <Route path="/cart" exact component={Cart} />
    </div>
  );
}

export default App;
