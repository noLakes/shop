import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Cart from './Components/Cart'
import Nav from './Components/Nav'
import Products from './Components/Products'

function App() {

  return (
    <div className='main-container'>
      <Nav />
      <Switch>
        <Route path='/products' component={Products}/>
        <Route path='/cart' component={Cart}/>
      </Switch>
    </div>
  )
}

export default App
