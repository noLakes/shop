import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Cart from './Components/Cart'
import Nav from './Components/Nav'

function App() {

  return (
    <Router>
      <div className='main-container'>
        <Nav />
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
