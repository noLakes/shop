import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

ReactDOM.render(
  <Router>
    <div className='main-container'>
      <Route exact path="/" component={App}/>
    </div>
  </Router>,
  document.getElementById('app')
)
