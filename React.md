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
- React finds that only the text inside <h1> changed
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













