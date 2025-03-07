/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import { useContext, useMemo, useState } from "react"
import { CountContext } from "./context";
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom, evenSelector } from "./store/atoms/counts";

function App() {
  return (
    <div>
    <ThemeProvider>      
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </ThemeProvider>
    </div>
  )
}

function Count() {
  return <div>
    <CountRenderer />
    <Buttons />
  </div>
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);
  
  return <div>
    <b>
      {count}
    </b>
    <EvenCountRendered/>
  </div>
}


function EvenCountRendered(){
  const isEven = useRecoilValue(evenSelector);
  return <div>
    {isEven ? "it is even": null }
  </div>
}

function Buttons() {
  const setCount = useSetRecoilState(countAtom)
  console.log("button re-rendered")

  return <div>
    <button onClick={() => {
      setCount(count => count + 1)
    }}>Increase</button>

    <button onClick={() => {
      setCount(count => count - 1)
    }}>Decrease</button>
  </div>
}

export default App

