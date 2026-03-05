# React Basics

---

## What is JSX and why is it used?

JSX stands for **JavaScript XML**. It allows us to write HTML-like code inside JavaScript. React uses JSX to describe what the UI should look like.

Instead of creating elements manually with JavaScript, JSX makes the code easier to read and write. React then converts JSX into normal JavaScript behind the scenes.

## Difference between State and Props

Both **state** and **props** are used to manage data in React, but they have different purposes.

### Props

- Props are used to pass data from a **parent component to a child component**.
- They are **read-only** and cannot be changed by the child.

### State

- State is used to store data inside a component.
- It **can change over time**, and when it changes, React **re-renders the component**.

---

## What is the useState hook and how does it work?

`useState` is a React hook that allows functional components to store and update state.

It returns two things:

1. The current state value
2. A function to update the state

---

## How can you share state between components in React?

The most common way is **lifting state up**.

This means moving the state to the **closest common parent component** and then passing the data or functions down to child components using props.

---

## How is event handling done in React?

React handles events using **camelCase syntax** and functions.

Instead of HTML events like `onclick`, React uses `onClick`.

---
