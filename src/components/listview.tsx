import { useState, useEffect, useContext, useReducer } from "react";
import theme from "./list.tsx"


const Listview = ({ getList }) => {
    const [items, setItems] = useState([]);
    const themes = useContext(theme); 

    const useReducerFn = (state, action) => {
        console.log(action,state)
        switch (action) {
            case 'increment':
                return { count:  state.count + 1 };
            case 'decrement':
                if(state.count > 0)
                return { count: state.count - 1 };
            default:
                return state;

        }
    }
    // const [count, setCount] = useState(1);
    const [state, dispatch] = useReducer(useReducerFn, { count: 1 })



    const increment = () => {
        dispatch('increment')
    }

    const decrement = () => {
        dispatch('decrement')
    }


    console.log(state)

    useEffect(() => {
        console.log("useeffect-listview")
        setItems(getList)
    }, [getList])
    return (
        <div>
            <button onClick={increment} >+</button> <br />
            {state.count} <br />
            <button onClick={decrement}>-</button>
            {items.map((item, index) => {
                return <p key={index} >{item}</p>
            })}
        </div>
    )
}

export default Listview;