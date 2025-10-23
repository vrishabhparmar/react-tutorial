import { useEffect, useRef } from "react";

const UseRefDemo = () => {

    const inputRef = useRef()

    useEffect(() => {
        inputRef.current.focus();
    },[])
    
    return(
        <div>
            <input ref={inputRef} placeholder="Type here" />
        </div>
    )

}