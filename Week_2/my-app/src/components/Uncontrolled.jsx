import {useRef} from 'react'

const Uncontrolled = () => {
    const nameRef = useRef();

    return (
        <div>
            <input type='text' ref={nameRef} />
            <button onClick={() => alert(`Hello ${nameRef.current.value}`)}> Uncontrolled</button>
        </div>
    )
}

export default Uncontrolled;