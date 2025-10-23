import React, { useMemo, useState } from 'react'

function DebounceDemo() {

    const [val, setVal] = useState('');

    function handleChange(e){
        setVal(e.target.value)
        console.log(e.target.value);
    }

    function debounce(func, wait){
        let timerId; // timer id which we need to use to clear the setTimeOut function
        return (...args) => {
            clearTimeout(timerId)
            timerId = setTimeout(
                () => {
                    func(...args)
                }, 
                wait
            )
        }
    }

const handleInputDebounce = useMemo(() => debounce(handleChange, 1000), []) 

  return (
    <div>
        <h1>Debounce Demo: {val}</h1>
        <input type='text' onChange={
             handleInputDebounce
        } val={val} />
    </div>
  )
}

export default DebounceDemo