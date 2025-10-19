import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import List from './components/List'
import Users from './components/Users'
import Counter from './components/Counter'
import Controlled from './components/Controlled'
import Uncontrolled from './components/Uncontrolled'
import Add from './components/Add'
import ClassComponent from './components/lifecycle/ClassComponent'
import FunctionalComponent from './components/lifecycle/FunctionalComponent'
import Timer from './components/Timer'


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

  
  return (
    <>
      {/* <Users persons={persons} /> */}
      {/* <Counter/> */}
      {/* <Controlled/>
      <Uncontrolled/>
      <List/> */}
      {/* <Add/> */}
      {/* <ClassComponent/> */}
      {/* <FunctionalComponent/> */}
      <Timer/>
    </>
  )
}

export default App
