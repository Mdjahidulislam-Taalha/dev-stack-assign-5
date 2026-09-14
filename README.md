Markdown
# Dev Stack 

Build your ideal development stack with the right technologies for your next project. A modern, responsive web application designed to help developers explore, filter, and curate their favorite tech stack seamlessly.


Technologies Used
Frontend: React (Vite)

Styling: CSS3 (Flexbox & CSS Grid, Custom Design with Inter Font Family)

Icons & Assets: Custom SVG Icons & Images

Notifications: React-Toastify

Key Features
Interactive Tech Catalog: Browse a curated list of popular frontend, backend, database, and DevOps technologies with custom visual badges and status tags.

Dynamic Stack Builder: Add or remove technologies from your personal stack in real time with immediate updates to your selection list.

Empty State & Conditional UI: Clean conditional rendering for empty stack messages, interactive notifications, and instant user guidance.

 React Questions & Answers
1. What is JSX, and why is it used in React?
Answer: JSX (JavaScript XML) is a syntax extension for JavaScript that allows us to write HTML-like markup directly inside JavaScript code. It makes building user interfaces much easier and more visual by combining UI logic with markup in one place.

2. What is the difference between props and state?
Answer:

Props: Data passed from a parent component to a child component (read-only and immutable by the child).

State: Data managed internally within a component that can change over time based on user action or events, triggering a component re-render.

3. What does the useState hook do, and where did you use it in this project?
Answer: The useState hook manages local component state in React functional components. In this project, useState was used to hold and update the list of selected technologies in the "Your Stack" section (e.g., const [selectedStack, setSelectedStack] = useState([])).

4. What does the useEffect hook do, and why did you need it to load the JSON data?
Answer: useEffect handles side effects in components, such as data fetching, subscriptions, or manual DOM manipulation. It was used with an empty dependency array [] to fetch the technologies JSON data once when the component first mounts.

5. Why does every item in a .map() list need a unique key prop?
Answer: React uses the unique key prop to track items in a list efficiently. It helps React identify which items have changed, been added, or removed, allowing optimal re-rendering performance without updating the entire list.

6. What is conditional rendering? Show one place you used it.
Answer: Conditional rendering means displaying specific UI elements based on certain conditions (like if statements or ternary operators).
Example from project: Displaying the "Your stack is empty" message when selectedStack.length === 0, otherwise rendering the list of selected technologies.

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
Answer:

Parent to Child: Data is passed down via props.

Child to Parent: The parent passes a callback function as a prop to the child, and the child calls that function with data as arguments to communicate back up.