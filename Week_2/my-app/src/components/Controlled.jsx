import {React, useState} from 'react'

const Controlled = () => {

    const [name, setName] = useState('');

    return (
        <>
        <form>
            {name}
            <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            value={name}
            />

        </form>
        </>
    )
}

export default Controlled;