import React from 'react'
import './App.css'
import { Navbar, Welcome, Transactions } from './components'
const App = () => {
  return (
    <>
      <div className="screen">
        <Navbar />
        <Welcome/>
        <Transactions/>
        
      </div>
    </>
  )
}

export default App
