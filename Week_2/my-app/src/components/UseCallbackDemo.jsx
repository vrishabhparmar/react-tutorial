import React, { useCallback, useState} from 'react'


function GrandChild({data}){

    console.log('Grand Child rendered');
    return <p>{data}</p>
}

const MemoGrandChild = React.memo(GrandChild)

function Child({onClick}){

    console.log('Child rendered');
    return <button onClick={onClick}>Child Button</button>
}

const MemoChild = React.memo(Child)


function Parent(){

    const [count, setCount] = useState(0);
    const [data, setData] = useState('Fetching Data');


    const handleCount = useCallback(() => {
        setCount(count + 1)
    },[])

    const handleData = useCallback(() => {
        setData('Data Fetched')
    }, [])
    

    console.log('Parent Rendered');


    return(

        <div>
            <MemoGrandChild data={count} /> 
            <MemoChild onClick={handleCount}/>
            <MemoGrandChild data={data} />
            <MemoChild onClick={handleData}/>
        </div>
    )
}

export default Parent;







