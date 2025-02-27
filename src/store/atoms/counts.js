/* eslint-disable no-unused-vars */
import { createContext, useMemo } from "react";
import { atom, selector } from "recoil";

export const countAtom = atom({
    key: "countAtom",
    default: 0
});


