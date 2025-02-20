/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CountContext } from './context'

function App() {

  return (
    <div>
      <Count></Count>
    </div>
  )
}

function Count(){
  return <div>
    <CountRenderer></CountRenderer>
    <Buttons></Buttons>
  </div>
}

function CountRenderer(){
  const count = 0;
  return <div>
    {count}
  </div>
}

function Buttons(){
  const count = 0
  return <div>
    <button onClick={()=>{setCount(count + 1)}}>Increase</button>
    <button onClick={()=>{setCount(count - 1)}}>Decrease</button>
  </div>
}

export default App
