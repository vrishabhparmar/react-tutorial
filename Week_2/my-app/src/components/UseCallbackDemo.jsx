import React, {useState} from 'react'

function Child({onClick}){

    
    function someCalulation(){
        console.log('Child render');
    }
    
    return <button onClick={onClick}>Child Button</button>
}

const MemoChild = React.memo(Child)


function Parent(){

    const [count, setCount] = useState(0);

    function handleClick(){
        setCount(count + 1)
        console.log('Parent handle click');
    }

    return(

        <div>
            <p>Count: {count}</p>
            <button onClick={handleClick}>Parent Button</button>
            <MemoChild onClick={handleClick}/>
        </div>
    )
}

export default Parent;







