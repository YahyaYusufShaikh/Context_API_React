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

function Count({setCount}){
  return <div>
    <CountRenderer></CountRenderer>
    <Buttons setCount={setCount}></Buttons>
  </div>
}

function CountRenderer(){
  const count = useContext(CountContext);
  return <div>
    {count}
  </div>
}

function Buttons({setCount}){
  const count = useContext(CountContext)
  return <div>
    <button onClick={()=>{setCount(count + 1)}}>Increase</button>
    <button onClick={()=>{setCount(count - 1)}}>Decrease</button>
  </div>
}

export default App
