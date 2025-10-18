import React, { useEffect, useState } from 'react'

function FunctionalComponent() {

    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log('Component Did mount');

        return () => {
            console.log('Component Unmount')
        }
    },[]) 

    useEffect(()=> {
        console.log('Count Component Did Mount');
        return () => {
            // Clean up function
            console.log('Count Component Unmount')
        }
    }, [count])


  return (
    <div>
        {count}
        <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default FunctionalComponent