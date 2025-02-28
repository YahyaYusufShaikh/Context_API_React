/* eslint-disable no-unused-vars */
import { createContext, useMemo } from "react";
import { atom, selector } from "recoil";

export const countAtom = atom({
    key: "countAtom",
    default: 0
});


export const evenSelector = selector({
    key: 'evenSelector',
    get: ({get}) => {
        const count = get(countAtom);
        return count % 2
    }
});

export const filteredTodos = selector({
    key: 'filteredTodos',
    get: (props) => {
        const todos = props.get(countAtom);
        const filter = props.get(filterAtom);
        
        return todos.filter(x => x.title.includes(filter) || x.description.includes("filter"))
    }
});