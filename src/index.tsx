import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import Home from './page/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import reportWebVitals from './reportWebVitals'
import Nav from './component/NavBar'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Router>
      <div className={'navBar'}>
        <Nav />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)

reportWebVitals()
