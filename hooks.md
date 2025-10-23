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










