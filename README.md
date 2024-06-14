# Props

- Props are used to pass data from parent to child components in React. Props are read-only and immutable.
- In typescript: To specify the type of props, we can use the interface or type keyword. To make a prop optional, we can use the question mark (?) after the prop name.

```tsx
interface Props {
  name: string;
  age?: number;
}
```

- In the above example, the name prop is required and the age prop is optional. Now to use the props in the component, we can use the following syntax:

```tsx
const Greet: React.FC<Props> = ({ name, age }) => {
  return (
    <div>
      <h1>
        Hello {name} {age}
      </h1>
    </div>
  );
};
```

- For optional props, we can use the default value as shown below:

```tsx
const Greet: React.FC<Props> = ({ name, age = 20 }) => {
  return (
    <div>
      <h1>
        Hello {name} {age}
      </h1>
    </div>
  );
};
```

# Rendering Lists

- To render a list of items in React, we can use the map() method to iterate over the array and return a list of elements. The map() method creates a new array with the results of calling a provided function on every element in the array.

```tsx
const names = ['Bruce', 'Clark', 'Diana'];

const NamesList = () => {
  return (
    <div>
      {names.map((name) => (
        <h2>{name}</h2>
      ))}
    </div>
  );
};
```

It's a good idea to add a unique key prop to each element when rendering a list of items. The key prop helps React identify which items have changed, are added, or are removed. The key prop should be a unique value, such as an id or a unique name.

```tsx
const names = [
  { id: 1, name: 'Bruce' },
  { id: 2, name: 'Clark' },
  { id: 3, name: 'Diana' },
];

const NamesList = () => {
  return (
    <div>
      {names.map((name) => (
        <h2 key={name.id}>{name.name}</h2>
      ))}
    </div>
  );
};
```

# Events Handling

- In React, events are triggered by the user interaction with the application, such as clicking a button, hovering over an element, or submitting a form. We can handle events in React using the camelCase naming convention, such as `onClick`, `onChange`, `onSubmit`, etc.

- To handle events in React, we can pass a function as a prop to the event handler. The function will be called when the event is triggered.

```tsx
const handleClick = () => {
  console.log('Button clicked');
};
```

Let's say we want to use the event object to get the value of the input field when the button is clicked. We can pass the event object as an argument to the event handler function.

```tsx
const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  console.log(e.target);
};
```

# Passing data from child to parent component

- In React, data can be passed from a child component to a parent component using a callback function. The parent component can pass a function as a prop to the child component, and the child component can call the function to pass data to the parent component.

- Let's create a child component called `ChildComponent` that has an input field and a button. When the button is clicked, the child component will pass the value of the input field to the parent component.

```tsx
interface Props {
  handleCallback: (data: string) => void;
}

const ChildComponent: React.FC<Props> = ({ handleCallback }) => {
  const [inputValue, setInputValue] = useState('');

  const handleClick = () => {
    handleCallback(inputValue);
  };

  return (
    <div>
      <input
        type='text'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
};
```

- Now, let's create a parent component called `ParentComponent` that will receive the data from the child component and display it.

```tsx
const ParentComponent = () => {
  const handleCallback = (data: string) => {
    console.log(data);
  };

  return (
    <div>
      <ChildComponent handleCallback={handleCallback} />
    </div>
  );
};
```

- In the `ParentComponent`, we pass the `handleCallback` function as a prop to the `ChildComponent`. When the button is clicked in the `ChildComponent`, the `handleCallback` function is called with the input field value as an argument.

# Conditional Rendering

- In React, we can conditionally render components or elements based on a condition using the ternary operator, logical && operator, or if statement.

- Let's say we want to render a component based on a condition. We can use the ternary operator to conditionally render the component.

```tsx
const Greet = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  return isLoggedIn ? <h1>Welcome User</h1> : <h1>Welcome Guest</h1>;
};
```

- We can also use the logical && operator to conditionally render a component.

```tsx
const Greet = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  return isLoggedIn && <h1>Welcome User</h1>;
};
```

- We can also use the if statement to conditionally render a component.

```tsx
const Greet = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  if (isLoggedIn) {
    return <h1>Welcome User</h1>;
  } else {
    return <h1>Welcome Guest</h1>;
  }
};
```

# State

- State is the reactive data that a component can maintain and update. State is used to store data that can change over time, such as user input, form data, or the result of an API call. State is immutable and can only be updated using the `setter` method returned by the `useState` hook.

- To use state in a functional component, we can use the `useState` hook provided by React. The `useState` hook returns an array with two elements: the current state value and a setter function to update the state value.

```tsx
const [count, setCount] = useState(0); // initial state value is 0
```

- In the above example, we are using the `useState` hook to create a state variable called `count` with an initial value of `0`. We are also using the `setCount` function to update the `count` state value.

- To update the state value, we can call the setter function with the new value.

```tsx
setCount((prev) => prev + 1);
```

- To read the state value, we can use the state variable directly.

```tsx
return (
  <div>
    <h1>{count}</h1>
    <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
  </div>
);
```

- In the above example, we are rendering the `count` state value in an `h1` element. When the button is clicked, the `setCount` function is called to update the `count` state value.
