import React from 'react'
import {Route} from 'react-router-dom'


import Header from './components/Header'
import Home from './pages/Home'
import Cart from './pages/Cart'
import PageItemWithRouter from './pages/PageItem'



function App() {
  return (
    <div className="App">
      <Header />
      <Route path="/" exact component={Home}/>
      <Route path="/cart" exact component={Cart} />
      <Route path="/:path/:id" exact component={PageItemWithRouter} />
    </div>
  );
}

export default App;
