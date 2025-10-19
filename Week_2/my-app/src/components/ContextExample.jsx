import React, { createContext, useContext, useState } from 'react'


const SimpleContext = createContext();

function ContextExample() {
    const [user, setUser] = useState('');

  return (
    <>
         <div>ContextExample</div>
         <SimpleContext.Provider value={{user, setUser}}>
            <Parent/>
         </SimpleContext.Provider>

         <button onClick={() => setUser('Vrishabh')}>Click me!</button>
    </>
  )
}

function Parent()
{
    return <Child/>
}

function Child()
{
    return <GrandChild/>
}

function GrandChild(){
    
    const {user, setUser} = useContext(SimpleContext);

    return (
        <>
         <h1> {user} </h1>
        <button onClick={() => setUser('')}>Child Click me!</button>
        </>
       
    )
}

export default ContextExample