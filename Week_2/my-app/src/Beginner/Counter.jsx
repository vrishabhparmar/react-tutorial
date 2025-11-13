
import { useState } from "react";

const CounterApp = () => {

    const [count, setCount] = useState(0);

    function handleIncrement(){
        setCount(count => count + 1);
    }

    function handleDecrement(){
        setCount(count => count - 1);
    }

    function handleReset(){
        setCount(0);
    }

    return (
        <>
            <div className="count">
                {count}
            </div>
            <div className="increment-button">
            <button onClick={handleIncrement}>Increment</button>
            </div>
            <div className="decrement-button">
            <button onClick={handleDecrement}>Decrement</button>
            </div>
            <div className="reset-button">
                <button onClick={handleReset}>Reset</button>
            </div>
        </>
    )
}

export default CounterApp;