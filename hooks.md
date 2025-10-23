# Hooks

# useState()

useState lets a React component remember a value between re-renders — like keeping track of a counter or input text.

### When your component first runs, React sets up a special “memory cell” to store that state value. You get back two things:

1. The current value
2. A function to update it

When you call the update function (for example, setCount(5)), React doesn’t change it right away.
Instead, it marks the component for re-render and updates that memory cell before the next render.

During re-render, React reads the updated value from its internal memory and shows the latest UI.

React also keeps track of hooks by the order they appear in your code — that’s why we must always call hooks in the same order.

# useEffect()

useEffect() is a React Hook that lets you run side effects in functional components — things that happen outside of rendering, like:

- fetching data from an API
- setting up event listeners
- updating the document title
- starting a timer

React’s main job is to render the UI. But sometimes, after the UI shows up, we want to “do something.”
That’s where useEffect() comes in — it runs after React has updated the DOM.

### How it works?

1. When your component renders, React registers your effect function.
2. After the render is done and the screen is updated, React runs the effect.
3. If you return a cleanup function, React will call it before running the effect again or before removing the component (useful for things like removing event listeners).

4. The second argument — the dependency array — tells React when to re-run the effect:

    - [] → only once (on mount)
    - [count] → runs when count changes
    - no array → runs after every render

"useEffect lets you perform side effects after rendering. React runs it after the DOM updates. It can clean up on unmount, and the dependency array controls when it re-runs. It’s like a lifecycle combination of componentDidMount, componentDidUpdate, and componentWillUnmount for functional components."


# useContext


useContext() is a React Hook that lets you share data easily between components — without having to pass props manually at every level (called prop drilling). It is part of Context API provided by React. The Context API is React’s built-in way to share data globally across components without prop drilling.

It’s like a shortcut for components to access global data — for example, a user’s info, theme (dark/light), or language setting.

```js
const ThemeContext = React.createContext();

<ThemeContext.Provider value="dark">
  <App />
</ThemeContext.Provider>

```
Now any component inside `<App/>` can access that value directly using `useContext`:

```js

const theme = useContext(ThemeContext);
console.log(theme); // "dark"

```
# useRef

useRef() is a React Hook that gives you a way to store a value that doesn’t trigger re-renders when it changes.

It’s mainly used for two things:

- Accessing DOM elements directly
- Storing mutable values that you want to keep between renders (like a variable that remembers something)

### How it works

When you call useRef(), React returns an object like this:

```js
const ref = useRef(initialValue);

{ current: initialValue }

```
You can change ref.current anytime, and React won’t re-render your component.

# Diff between useState and useRef

| Feature           | `useState`                                                  | `useRef`                                               |
| ----------------- | ----------------------------------------------------------- | ------------------------------------------------------ |
| **Purpose**       | Used to store data that affects rendering (UI state).       | Used to store data that does **not** affect rendering. |
| **Re-render**     | Changing state **causes the component to re-render**.       | Changing `.current` **does not cause re-render**.      |
| **Usage example** | Form input values, toggles, counters (that must update UI). | Accessing DOM elements, timers, previous values.       |
| **Value type**    | Returns `[value, setValue]`.                                | Returns an object `{ current: value }`.                |
| **Persistence**   | Value persists between renders.                             | Value also persists between renders.                   |

# What is useMemo()

useMemo() is a React Hook that helps optimize performance by remembering the result of a calculation — so React doesn’t have to re-run that expensive logic every time the component re-renders.

    “Only re-calculate this value when one of these specific inputs changes.”

```js

import React, { useMemo, useState } from "react";

function ExpensiveComponent({ numbers }) {
  const [count, setCount] = useState(0);

  const total = useMemo(() => {
    console.log("Calculating...");
    return numbers.reduce((a, b) => a + b, 0);
  }, [numbers]);

  return (
    <>
      <p>Total: {total}</p>
      <button onClick={() => setCount(count + 1)}>Clicked {count}</button>
    </>
  );
}


```

# useCallback

useCallback() is a React Hook that helps you optimize performance by memoizing functions —
so React doesn’t recreate the same function every time your component re-renders.

It’s especially useful when you pass functions as props to child components that use React.memo() (because otherwise they’d re-render unnecessarily).

```js

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


```

Here the Child will rerender only if the its props will change which is `noClick handler`. 

# useReducer


```js

import { useReducer } from "react";

const initialValue = 0;
const reducer = (state, action) => {
    switch(action){
        case 'increment': 
            return state + 1
        case 'decrement': 
            return state - 1
        case 'reset': 
            return initialValue
        default:
            return state;
    }
}

const UseReducerDemo = () => {
    const [count, dispatch] = useReducer(reducer, initialValue)

    return (
        <div>
            <h1>Use Reducer Demo: {count}</h1>
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={() => dispatch('reset')}>Reset</button>

        </div>
    )
}

export default UseReducerDemo;

```

# useLayout

The React hook useLayoutEffect is very similar to the more commonly used useEffect but differs mainly in when it runs during the component lifecycle.

### What is useLayoutEffect?

- It’s a hook you run after React has updated the DOM, but before the browser has painted (or visually updated) the screen.

- This means it blocks the browser from painting until your effect code finishes running.

### Why is this useful?

- Sometimes you need to make immediate changes to the layout or measurements of elements on the page to avoid flickering or visual glitches.

- For example, if you render a tooltip or popup and want to measure its size and position it correctly before the user sees it, useLayoutEffect ensures this happens smoothly without a visible flicker.

### How is it different from useEffect?

- useEffect runs asynchronously after the browser has painted.

- useLayoutEffect runs synchronously before the paint.

- Because useLayoutEffect blocks painting until complete, it can cause performance impacts if misused.

### When to use useLayoutEffect?

- When you need to interact with the DOM to measure or modify layout before the user sees anything.

# useImeparativeHandle

# debouncing

debounce is a performance optimization technique used in React (and JavaScript in general) to limit how often a function runs — especially for actions triggered by rapid events (like typing or scrolling).

```js
import React, { useMemo, useState } from 'react'

function DebounceDemo() {

    const [val, setVal] = useState('');

    function handleChange(e){
        setVal(e.target.value)
        console.log(e.target.value);
    }

    function debounce(func, wait){
        let timerId; // timer id which we need to use to clear the setTimeOut function
        return (...args) => {
            clearTimeout(timerId)
            timerId = setTimeout(
                () => {
                    func(...args)
                }, 
                wait
            )
        }
    }

const handleInputDebounce = useMemo(() => debounce(handleChange, 1000), []) 

  return (
    <div>
        <h1>Debounce Demo: {val}</h1>
        <input type='text' onChange={
             handleInputDebounce
        } val={val} />
    </div>
  )
}

export default DebounceDemo

```

# throttle

“Run the function at most once every X milliseconds, no matter how many times it’s called.”











