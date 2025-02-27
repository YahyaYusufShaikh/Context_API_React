/* eslint-disable no-unused-vars */
import { useContext, useMemo, useState } from "react"
import { CountContext } from "./context";
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom } from "./store/atoms/counts";

function App() {
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
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
  console.log("re-rendered")
  const count = useRecoilValue(countAtom);
  
  return <div>
    <b>
      {count}
    </b>
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

