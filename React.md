# What is React? Why do we need React?

React is a JavaScript library used to build user interfaces, mainly for web applications.
It’s created by Facebook (Meta) and helps developers build fast, interactive, and reusable UI components.

        React helps you build dynamic websites that update instantly without reloading the entire page.

## Why do we need React?

1. Faster and smoother apps
React uses something called the Virtual DOM — a lightweight copy of the real DOM.
When something changes on the page, React updates only what’s needed, not the whole page.
➡️ This makes the app fast and efficient.

2. Reusable components
You can create independent, reusable pieces of UI called components (like buttons, forms, cards, etc.).
➡️ This saves time and makes your code easier to manage.

3. Declarative approach
You just describe what you want to see, and React takes care of how to render it.
➡️ This makes the code more readable and predictable.


#### Imperative (Javascript)

```javascript

const button = document.createElement('button');
button.textContent = 'Click me';
button.addEventListener('click', () => {
    button.textContent='Clicked!';
});
document.body.appendChild(button);

```
In the above code you are telling the browser to:
- Create a button
- Set Text
- Handle clicks
- Update text manually

#### Declarative (React)

```Javascript

function App() {
  const [clicked, setClicked] = React.useState(false);

  return (
    <button onClick={() => setClicked(!clicked)}>
      {clicked ? 'Clicked!' : 'Click me'}
    </button>
  );
}


```

Here, you’re not telling React how to change the button text.
You’re simply saying:

“If clicked is true → show ‘Clicked!’, else → show ‘Click me’.”

React automatically updates the DOM when the state changes.
You describe what the UI should be, not how to change it.


#### Why declarative is Better

You describe what you want rather than you telling how to do it.
React handles DOM updates rather than you manually update DOM 
Easier to read and maintain rather than impleratove which is Harder to debug and modify
Scales well for complex UIs while implerative gets messy as app grows


4. Strong community and ecosystem
React is widely used and supported.
You get many libraries, tools, and tutorials, which makes development faster and easier.

5. Supports modern app needs
React is perfect for Single Page Applications (SPAs) — where content updates dynamically without full page reloads.
It can also be used for mobile apps via React Native.


# What is virtual DOM?

The Virtual DOM (VDOM) is a lightweight copy of the real DOM (the structure of your webpage in memory).

When you change something in React (like updating state), React:

- Creates a new Virtual DOM that represents how the UI should look now.

- Compares it with the previous Virtual DOM (this is called diffing).

- Updates only the changed parts in the real browser DOM.

```javascript 
import {React, useState} from 'react'

function Counter(){
    const [count, setCount] = useState(0);
    
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)} >Add </button>
        </div>
    )
}

export default Counter;

```
Here’s what happens when you click the “Add” button 👇

- setCount(count + 1) updates the state -> count becomes 1
- React re-renders the component -> creates a new `virtual DOM` showing `<h1>1</h1>`
- React compares this new Virtual DOM with the old one `<h1>0</h1>`
- React finds that only the text inside `<h1>` changed
- React updates only that part in the real DOM - not the whole page.

#### Virtual DOM + Declarative = Power Combo

Declarative: You describe what the UI should look like
Virtual DOM: React efficiently figures out what changed
Together: You focus on what you want, React handles how

# What is a SINGLE PAGE APPLICATION?

A Single Page Application (SPA) is a web app that loads just one HTML page, and then dynamically updates its content as you interact with it — without reloading the entire page.


How it works

When you first visit the site, the browser loads one HTML page (usually index.html) along with JavaScript and CSS.

After that, when you click on buttons or links:

The app doesn’t reload the page.

It fetches new data (usually via APIs).

React (or another JS framework) updates only the needed part of the page.

# What is JSX? How it differs from HTML?

JSX (JavaScript XML) is a syntax extension for JavaScript that lets you write HTML-like code inside JavaScript.

It’s what React uses to describe the UI.

In short, JSX lets you write UI components that look like HTML but work like JavaScript.

```javascript

function Welcome() {
  return <h1>Hello, React!</h1>;
}

```
This looks like HTML, but it’s actually JavaScript under the hood.
React converts this JSX into regular JavaScript calls like

```javascript

React.createElement('h1', null, 'Hello, React!');

```
So JSX just makes your code cleaner and easier to read.


Why JSX is Used

- Easier to write and visualize UI components.

- Lets you mix HTML structure + JavaScript logic in one place.

- Helps React efficiently update the UI.


# Explain diff between class and functional components?

Components are building blocks of a React app — they let you split the UI into reusable pieces.

There are two main types:

- Class Components (older way)

- Functional Components (modern way)

### Class Components

```js

import React, { Component } from 'react'

export default class SampleClassComponent extends Component {
  render() {
    return (
      <div>SampleClassComponent</div>
    )
  }
}

```
Use the `render()` method to return JSX.
Use this.state and this.setState() for managing state.
Lifecycle methods like `componentDidMount()`, `componentDidUpdate()`, etc.

### Functional Components

```js
import {React} from 'react';
function Welcome(props) {

const [count, setCount] = React.useState(0);

  return <h1>Hello, {props.name}</h1>;
}


```

# Statefull vs Stateless

### What is state in React?

State is an object that holds data which can change over time — and when it changes, React re-renders the component.

```js

const [count, setCount] = React.useState(0);

```
Here, count is the state, and changing it will update the UI automatically.

### Stateful Component

A stateful component is one that manages its own state — meaning it can store and update data internally.

```js

function Counter() {
  const [count, setCount] = React.useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}

```

➡️ Counter keeps track of its count value.
It has state → so it’s stateful.

Characteristics

- Holds and manages local data (state).
- Reacts to user input or events.
- Causes re-render when state changes.

### Stateless Component

A stateless component (also called presentational component) doesn’t hold any state — it just receives data via props and displays it

```js

function Greeting(props) {
  return <h1>Hello, {props.name}</h1>;
}


```
➡️ Greeting only shows what it’s given — it doesn’t manage any data.
So it’s stateless.

Characteristics:
- Purely presentational.
- No internal data management.
- Output depends only on props.

# What are props in react and how are they used?

Props (short for properties) are inputs to a React component.
They allow you to pass data from a parent component to a child component.

Props are like function arguments for components.


`Parent Component`

```js
function App() {
  return <Greeting name="Vrishabh" />;
}

```

`Child Component`
```js

function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}


```
#### Key points about props

Read-only: You cannot change props inside a child element
Passed from parent to child: Data always flows one way
Resuable components: Props let you use the same component with different data. 
Accessed via: `props.propertyName` or directly via destructuring


# What is diff between props ans state?

| Feature                 | **Props**                          | **State**                                           |
| ----------------------- | ---------------------------------- | --------------------------------------------------- |
| **Owned by**            | Parent component                   | The component itself                                |
| **Can be changed by**   | Parent only                        | The component itself                                |
| **Mutability**          | Read-only                          | Mutable (can change using `setState` or `useState`) |
| **Purpose**             | Pass data down to child components | Manage local data that changes over time            |
| **Triggers re-render?** | Yes, if parent passes new props    | Yes, when state changes internally                  |


# What are controlled and uncontrolled components?

Both terms describe how form inputs (like text boxes, checkboxes, etc.) are managed in React.


### Controlled Component

A controlled component is one where React controls the form data through state.


That means:

- The input’s value is stored in state.

- Every change in the input updates the state.

- The UI always reflects the state value.

```js

import {React, useState} from 'react'

const Controlled = () => {

    const [name, setName] = useState('');

    return (
        <>
        <form>
            {name}
            <input
            onChange={(e) => setName(e.target.value)} // Update State
            type="text"
            value={name} // Value controlled by React
            />

        </form>
        </>
    )
}

export default Controlled;


```

Here the input value is fully controlled by React's `state`.

### Uncontrolled Components

An uncontrolled component is one where the DOM itself handles the form data, not React.

You use a ref to access the input’s value only when needed (like on submit).

```js

import {useRef} from 'react'

const Uncontrolled = () => {
    const nameRef = useRef();

    return (
        <div>
            <input type='text' ref={nameRef} />
            <button onClick={() => alert(`Hello ${nameRef.current.value}`)}> Uncontrolled</button>
        </div>
    )
}

export default Uncontrolled;

```
Key points:

- Data is handled by the DOM, not React.

- Useful for simple or quick forms.

- Harder to validate in real time.


| Feature                  | **Controlled Component**        | **Uncontrolled Component** |
| ------------------------ | ------------------------------- | -------------------------- |
| **Data managed by**      | React state                     | DOM (via refs)             |
| **Access value**         | From state                      | From `ref.current.value`   |
| **Real-time validation** | ✅ Easy                          | ❌ Harder                   |
| **Performance**          | Slightly slower for many inputs | Faster for simple cases    |
| **Recommended for**      | Complex or dynamic forms        | Simple, one-time inputs    |

# What is key attribute in React list?

The key is a special attribute you give to elements inside a list when rendering them dynamically (using .map() or loops).


It helps React identify which items have changed, been added, or removed — so React can update the UI efficiently.

```js
function Fruits() {
  const fruits = ["Apple", "Banana", "Mango"];

  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}

```
✅ Here React can track each <li> element uniquely using its key.

Better example

```js
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

```

### Why keys are important?

React uses keys during its reconciliation process (`rerendering`) — when it compares the new Virtual DOM with the previous one.
- If a list changes (like an item is added or removed),
- React uses keys to quickly find which elements changed,
- And only updates those, not the whole list.

This makes rendering faster and more accurate.

# What are fragments?

In React, Fragments let you group multiple elements without adding extra nodes (like a <div>) to the DOM.

```js

{
  items.map(item => (
    <React.Fragment key={item.id}>
      <dt>{item.name}</dt>
      <dd>{item.value}</dd>
    </React.Fragment>
  ))
}

```
Why do we need them?

In React, when you return elements from a component, you can only return one parent element.
But sometimes you want to return multiple sibling elements without wrapping them in an unnecessary container.


# What are React Lifecycle methods? Where are they used?

React components (especially class components) go through a series of stages — from being created, to updated, to removed from the DOM.

### 3 Main Phases of a Component’s Lifecycle

1. Mounting (when the component is created and inserted into the DOM)

Lifecycle methods:

- constructor() → for initializing state or binding methods

- componentDidMount() → runs after the component is rendered

✅ Common use: Fetching data from an API

2. Updating (when props or state change)

Lifecycle methods:

- shouldComponentUpdate() → decide whether to re-render

- componentDidUpdate() → runs after re-rendering happens
✅ Common use: Responding to state or prop changes, API re-calls

3. Unmounting (when the component is removed from the DOM)

Lifecycle method:

- componentWillUnmount() → runs before the component is destroyed
✅ Common use: Cleaning up timers, subscriptions, or event listeners



### Class Lifecycle

| Lifecycle Method            | When It Runs             | Purpose                                 |
| --------------------------- | ------------------------ | --------------------------------------- |
| **constructor()**           | Before render            | Initialize state, bind methods          |
| **render()**                | Every time UI updates    | Displays the UI                         |
| **componentDidMount()**     | After first render       | Fetch data, start timers, subscriptions |
| **shouldComponentUpdate()** | Before re-render         | Decide if update is needed              |
| **componentDidUpdate()**    | After re-render          | Respond to state/prop changes           |
| **componentWillUnmount()**  | Before removing from DOM | Cleanup (stop timers, remove listeners) |

### Functinal Lifecycle

In functional components, we use the useEffect hook to handle all lifecycle events that class components manage with methods like componentDidMount, componentDidUpdate, and componentWillUnmount

```js
useEffect(() => {
  // 1️⃣ Runs when the component mounts (like componentDidMount)
  // 2️⃣ Runs again when dependencies change (like componentDidUpdate)
  // 3️⃣ Runs cleanup before unmount (like componentWillUnmount)
}, [dependencies]);

```



# super() and super(props)

In a React class component, the `super()` keyword is used inside the constructor to call the constructor of the parent class, which is `React.Component`. This call is essential because it initializes the `this` context of the class component and allows you to access properties and methods inherited from `React.Component`.[1][2][3]

### Why `super()` is Needed

- When you define a constructor in a subclass (like a React component extending `React.Component`), JavaScript requires you to call `super()` before you can use `this`. If you try to access `this` before calling `super()`, it will throw an error because the instance is not properly initialized.[3][1]
- The `super()` call executes the parent class’s constructor method, setting up the inheritance chain properly so React can manage the component lifecycle and properties.[2][3]

### Using `super()` vs `super(props)`

- Calling just `super()` calls the parent class constructor without providing it any arguments.  
- Calling `super(props)` passes the component's `props` to the parent constructor, making `this.props` immediately available inside the constructor. This is important because if you want to use `this.props` to initialize state or access props values within the constructor, you need to pass them via `super(props)`.[8][1][3]
  
### Example

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props); // Necessary to access this.props
    this.state = { count: 0 };
  }
  
  render() {
    return <div>{this.props.name}: {this.state.count}</div>;
  }
}
```

If you omit `super(props)` and try to use `this.props` inside the constructor, it will be `undefined`, causing bugs.[3][8]

### Summary

- Always call `super()` in a React class component constructor if you define one.
- Use `super(props)` when you need to access `this.props` inside the constructor.
- This ensures proper initialization of the component and enables usage of props and state as expected within the class.







