import React, { useCallback, useMemo, useRef, useState } from 'react'

function ThrottleDemo() {

    const [inputVal, setInputVal] = useState('');
    const lastTime = useRef(Date.now())

    function apiCall(e){
        setInputVal(e.target.value)
        console.log(e.target.value)
    }

    function throttle(func, limit){

        return (...args) => {
            const now = Date.now()
            if(now - lastTime.current >= limit)
            {
                func(...args)
                lastTime.current = now
            }
            
        }
    }

const handleInput = useCallback(throttle(apiCall, 300), [inputVal])

  return (
    <div>
        <h1>ThrottleDemo: {inputVal}</h1>
        <input type='text' onChange={handleInput} value={inputVal} />
    </div>
  )
}

export default ThrottleDemo