# Dev Stack

Dev Stack is a responsive React web application that helps developers explore different technologies and build their ideal development stack. Users can explore technologies, add them to their stack, and manage their selected technologies easily.

## Technologies Used

- React
- JavaScript
- Vite
- CSS
- React Toastify
- JSON
- Git & GitHub

## Features

- Explore different technologies with their category, difficulty level, rating, description, and badge.
- Add technologies to a personal stack and remove them individually or all at once.
- Get toast notifications when adding, removing, selecting duplicate technologies, or clearing the stack.

## React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax that allows us to write HTML-like code inside JavaScript. It makes React components easier to create and understand.

### 2. What is the difference between props and state?

Props are used to pass data from a parent component to a child component. State is used to store and manage data that can change inside a component.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is used to create and manage state in a React component. I used it to manage the technology data, selected technologies, and loading state.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` runs code after the component renders. I used it to fetch the technology data from the `data.json` file when the Technology section loads.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

A unique `key` helps React identify each item in a list. It allows React to efficiently update the correct item when the list changes.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition.

I used it for the stack section:

```jsx
{selectedTechnologies.length === 0 ? (
  <p>No technologies selected yet.</p>
) : (
  <div className="stack-items">
    ...
  </div>
)}

When no technology is selected, the empty stack message is shown.

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data to a child through props. A child can communicate back to the parent by calling a function that the parent passes through props.