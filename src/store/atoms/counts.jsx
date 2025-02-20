/* eslint-disable no-unused-vars */
import {atom} from 'react'

const countAtom = atom({
    key: "countAtom",  //key uniquely identify the Atom
    default: 0        //its the defaul value of the countAtom
})