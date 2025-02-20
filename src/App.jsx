/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useContext } from 'recoil'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { customAtom } from './context'
import { RecoilRoot, useRecoilValue, useRecoilState, useSetRecoilState } from 'recoil'
import { countAtom } from './store/atoms/counts'


function App() {

  return (
    <div>
      <RecoilRoot>
        <Count></Count>
      </RecoilRoot>
    </div>
  )
}

function Count(){
  console.log("re-render")
  return <div>
    <CountRenderer></CountRenderer>
    <Buttons></Buttons>
  </div>
}

function CountRenderer(){
  const count = useRecoilValue(countAtom)
  return <div>
    {count}
  </div>
}

function Buttons(){
  const [count, setCount] = useSetRecoilState(countAtom)
  return <div>
    <button onClick={()=>{setCount(count + 1)}}>Increase</button>
    <button onClick={()=>{setCount(count - 1)}}>Decrease</button>
  </div>
}

export default App
