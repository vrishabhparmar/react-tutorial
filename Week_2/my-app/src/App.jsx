import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import List from './components/List'
import Users from './components/Users'


/**
 * 
 * @returns 
 * 
 * Create a React component called UserList that:
Displays a list of users with their names and ages.
Has a button that toggles between:
Showing all users
Showing only users aged 18 or above
Includes a dropdown to sort users by age ascending or descending.
 */
function App() {

  const persons = [
    {
      name: "Rahul",  age: 18
    },
    {
      name: "Raj", age: 16
    },
    {
      name: "Kunal", age: 20
    },
    
  ]


  return (
    <>
      <Users persons={persons} />
    </>
  )
}

export default App
