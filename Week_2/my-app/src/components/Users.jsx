import React, { useState } from 'react'

function Users({persons}) {

const [show, setShow] = useState(false);
const [eighteenAbove, setEighteenAbove] = useState(false);
const [sort, setSort] = useState(false);



  return (
    <div>
        <select>
        { show ? 
        ( eighteenAbove ?

            persons.filter(val => val.age >= 18).sort((a,b) => sort ? a.age - b.age : b.age - a.age).map((val) => (
            <option>{ val.name}</option>
            ))

        : 

        persons.sort((a,b) => sort ? a.age - b.age : b.age - a.age).map((val) => (
            <option>{ val.name}</option>
        ))
        
        )
        : ''
    }
    </select>
    <button onClick={() => setShow(!show)}>Click</button>
    <button onClick={() => setEighteenAbove(!eighteenAbove)}>filter</button>
    <button onClick={() => setSort(!sort)}>Sort</button>


    </div>
  )
}

export default Users