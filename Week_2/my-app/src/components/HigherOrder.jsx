import React from 'react'

function WithBorder(WrappedComponent){
    return function (){
        return (
            <div style={{border:'2px solid blue', padding:'10px'}}>
                <WrappedComponent/>
            </div>
        )
    }
}

function Greet()
{
    return <h1>Hello! From Higher order component</h1>
}

export const HigherOrder = WithBorder(Greet);