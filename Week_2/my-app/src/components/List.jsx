import React from "react";

const List = () => {

    const people = [
        {
            id:1,
            name:"Vrishabh"
        },
        {
            id:2,   
            name:"Vrishabh"
        }
    ]

    return (
        <h1>{people.map((val) => (
            <p key={val.id} >{val.name}</p>
        ))} </h1>
    )
}

export default List;
