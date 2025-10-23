import { useReducer } from "react";

const initialValue = 0;
const reducer = (state, action) => {
    switch(action){
        case 'increment': 
            return state + 1
        case 'decrement': 
            return state - 1
        case 'reset': 
            return initialValue
        default:
            return state;
    }
}

const UseReducerDemo = () => {
    const [count, dispatch] = useReducer(reducer, initialValue)

    return (
        <div>
            <h1>Use Reducer Demo: {count}</h1>
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={() => dispatch('reset')}>Reset</button>

        </div>
    )
}

export default UseReducerDemo;