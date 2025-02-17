/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Count count={count} setCount={setCount}></Count>
    </div>
  )
}

function Count({setCount}){
  return <div>
    <CountRenderer></CountRenderer>
    <Buttons setCount={setCount}></Buttons>
  </div>
}

function CountRenderer({count}){
  return <div>
    {count}
  </div>
}

function Buttons({count, setCount}){
  return <div>
    <button onClick={()=>{setCount(count + 1)}}>Increase</button>
    <button onClick={()=>{setCount(count - 1)}}>Decrease</button>
  </div>
}

export default App
