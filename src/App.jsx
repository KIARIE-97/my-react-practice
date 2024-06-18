import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/home'

function App() {
  const name = 'Sarah'
  const moredetails = {age: 23, height: 5.6}
 

  return (
    <>
 
     <Home name={name} moredetails={moredetails}/>

      <div className="App">
        <p>hello sarah☀️</p>
        </div>
    </>
  )
}

export default App
