import { useState, useEffect } from "react";

function Timer(){

    const [time, setTime] = useState(0);

    useEffect(() => {

        const interval = setInterval(() => {
            setTime(time => time + 1);
        },1000)

        return () => {
            console.log('Clean up run');
            setTime(0);
            clearInterval(interval);
        }

    },[])
    
    return (
        <h1>Timer {time}</h1>
    )
}

export default Timer;