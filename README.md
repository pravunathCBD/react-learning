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
const names = ["Bruce", "Clark", "Diana"];

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
  { id: 1, name: "Bruce" },
  { id: 2, name: "Clark" },
  { id: 3, name: "Diana" },
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
  console.log("Button clicked");
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
  const [inputValue, setInputValue] = useState("");

  const handleClick = () => {
    handleCallback(inputValue);
  };

  return (
    <div>
      <input
        type="text"
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

# Hooks

- Hooks are functions that let you use state and other React features in functional components.
- There are several built-in hooks provided by React, such as `useState`, `useEffect`, `useContext`, `useReducer`, `useRef`, etc.
- Rules of Hooks:
  - Only call hooks at the top level of your functional component.
  - Only call hooks from React functional components or custom hooks.
  - Don't call hooks inside loops, conditions, or nested functions.
  - Hooks start with the word `use`.

# useEffect Hook

- The `useEffect` hook is used to perform side effects in functional components. Side effects can include data fetching, subscriptions, or manually changing the DOM in React components.
- The `useEffect` hook takes two arguments: a function that contains the side effect and an optional array of dependencies.
- The function passed to the `useEffect` hook will run after the component has rendered.
- The optional array of dependencies is used to specify when the side effect should run. If the array is empty, the side effect will run only once after the initial render. If the array contains values, the side effect will run whenever one of the values changes.

```tsx
useEffect(() => {
  // side effect
}, [dependencies]);
```

- Let's say we want to fetch data from an API when the component mounts. We can use the `useEffect` hook to fetch the data.

```tsx
const [data, setData] = useState([]);

useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => setData(data));
}, []);
```

- In the above example, we are using the `useEffect` hook to fetch data from the JSONPlaceholder API when the component mounts. We are passing an empty array as the second argument to the `useEffect` hook, which means the side effect will run only once after the initial render.

# useMemo Hook

- The `useMemo` hook is used to memoize the result of a function. Memoization is an optimization technique used to cache the result of a function so that the function does not have to be re-executed if the input values are the same.
- The `useMemo` hook takes two arguments: a function that returns the memoized value and an array of dependencies.
- The function passed to the `useMemo` hook will be called only when one of the dependencies changes. If the dependencies do not change, the memoized value will be returned.

```tsx
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

# useCallback Hook

- The `useCallback` hook is used to memoize a callback function. It is similar to the `useMemo` hook, but it is used for functions instead of values.
- The `useCallback` hook takes two arguments: a callback function and an array of dependencies.
- The function passed to the `useCallback` hook will be memoized and will only be re-created if one of the dependencies changes.

```tsx
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
```

# useRef Hook

- The `useRef` hook is used to create a mutable reference that can be used to store a reference to a DOM element or a value that persists between renders.
- The `useRef` hook returns a mutable object with a `current` property that can be used to store the reference.

```tsx
const inputRef = useRef<HTMLInputElement>(null);

return <input ref={inputRef} />;
```

- In the above example, we are using the `useRef` hook to create a reference to an input element. We are passing the `inputRef` object to the `ref` attribute of the input element.

# Controlled Components

- In React, a controlled component is a component that controls the value of its input elements. The value of the input element is controlled by the component's state, and the component's state is updated when the input element's value changes.

- To create a controlled component, we need to set the value of the input element to the state value and handle the `onChange` event to update the state value.

```tsx
const [name, setName] = useState("");

return (
  <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
);
```

- In the above example, we are creating a controlled input element. The value of the input element is set to the `name` state value, and the `onChange` event is used to update the `name` state value.

# Uncontrolled Components

- In React, an uncontrolled component is a component that does not control the value of its input elements. The value of the input element is controlled by the DOM, and the component does not maintain the state of the input element.

- To create an uncontrolled component, we need to remove the `value` attribute from the input element and use a `ref` to get the input element's value.

```tsx
const inputRef = useRef<HTMLInputElement>(null);

return <input type="text" ref={inputRef} />;
```

- In the above example, we are creating an uncontrolled input element. We are using the `useRef` hook to create a reference to the input element, and we can get the input element's value using the `inputRef.current.value` property.

# Handling Forms

- In React, forms are used to collect user input. We can handle forms in React using controlled components or uncontrolled components.

- To handle forms in React, we can use the `onChange` event to update the state value when the input element's value changes.

```tsx
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  console.log(name
    email,
    password);
};

return (
  <form onSubmit={handleSubmit}>
    <input
      type='text'
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
    <input
      type='email'
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
    <input
      type='password'
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
    <button type='submit'>Submit</button>
  </form>
);
```

- In the above example, we are handling a form in React using controlled components. We are using the `onChange` event to update the state value when the input element's value changes. We are also using the `onSubmit` event to handle the form submission.

- But the problem with the above approach is that we have to create a separate state variable and event handler for each input element. To avoid this, we can use a single state variable to store the form data.

```tsx
const [formData, setFormData] = useState({
  name: "",
  email: "",
  password: "",
});

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  console.log(formData);
};

return (
  <form onSubmit={handleSubmit}>
    <input
      type="text"
      name="name"
      value={formData.name}
      onChange={handleChange}
    />
    <input
      type="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
    />
    <input
      type="password"
      name="password"
      value={formData.password}
      onChange={handleChange}
    />
    <button type="submit">Submit</button>
  </form>
);
```

- In the above example, we are using a single state variable called `formData` to store the form data. We are using the `name` attribute of the input element to identify the form field and update the state value accordingly.

# Promises and async / await

- A promise is an object that represents the eventual completion or failure of an asynchronous operation. A promise can be in one of three states: pending, fulfilled, or rejected.
- Promises are used to handle asynchronous operations in JavaScript, such as fetching data from an API, reading a file, or making a network request.
- Promises can be created using the `Promise` constructor, which takes a function as an argument. The function takes two arguments: `resolve` and `reject`. The `resolve` function is used to fulfill the promise, and the `reject` function is used to reject the promise.

```tsx
const promise = new Promise((resolve, reject) => {
  // asynchronous operation
  if (success) {
    resolve("Data fetched successfully");
  } else {
    reject("Error fetching data");
  }
});
```

- We can use the `then` method to handle the fulfillment of a promise and the `catch` method to handle the rejection of a promise.

```tsx
promise
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
```

- The `async` and `await` keywords are used to work with promises in a more synchronous way. The `async` keyword is used to define an asynchronous function, and the `await` keyword is used to wait for a promise to be fulfilled.

```tsx
const fetchData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};
```

- In the above example, we are using the `async` and `await` keywords to fetch data from the JSONPlaceholder API. The `fetch` function returns a promise, and we are using the `await` keyword to wait for the promise to be fulfilled.

# Defining interfaces

- In TypeScript, interfaces are used to define the shape of an object. An interface can be used to define the properties and methods of an object, and it can be used to enforce type checking in TypeScript.

- To define an interface in TypeScript, we can use the `interface` keyword followed by the interface name and the properties of the interface.

```tsx
interface IUser {
  name: string;
  age: number;
}
```

- In the above example, we are defining an interface called `IUser` with two properties: `name` of type `string` and `age` of type `number`. We can use the `IUser` interface to enforce type checking on an object.

```tsx
const user: IUser = {
  name: "John Doe",
  age: 30,
};
```

- Interfaces can be extended to create new interfaces that inherit the properties of the base interface.

```tsx
interface IAdmin extends IUser {
  role: string;
}
```

- In the above example, we are extending the `IUser` interface to create a new interface called `IAdmin` with an additional property `role` of type `string`.

# Fetching data from an API

- In React, we can fetch data from an API using the `fetch` function or a library like Axios. The `fetch` function is a built-in JavaScript function that is used to make network requests and fetch data from a server.

- The `fetch` function returns a promise that resolves to the `Response` object representing the response to the request.

```tsx
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
```

- In the above example, we are using the `fetch` function to fetch data from the JSONPlaceholder API. We are using the `then` method to handle the response and convert it to JSON format.

- We can also use the `async` and `await` keywords to fetch data from an API in a more synchronous way.

```tsx
const fetchData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};
```

- In the above example, we are using the `async` and `await` keywords to fetch data from the JSONPlaceholder API. The `fetch` function returns a promise, and we are using the `await` keyword to wait for the promise to be fulfilled.

# Updating state when API data is fetched

- When fetching data from an API in React, we can update the component's state with the fetched data using the `useState` hook.

```tsx
const [data, setData] = useState([]);

useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => setData(data));
}, []);
```

- In the above example, we are using the `useState` hook to create a state variable called `data` to store the fetched data. We are using the `useEffect` hook to fetch data from the JSONPlaceholder API when the component mounts.

- We can also the above example using the `async` and `await` keywords.

```tsx
const [data, setData] = useState([]);

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error(error);
    }
  };

  fetchData();
}, []);
```

- In the above example, we are using the `async` and `await` keywords to fetch data from the JSONPlaceholder API. We are using the `useState` hook to create a state variable called `data` to store the fetched data.

# POST data to an API

- To POST data to an API using the `fetch` function or a library like Axios, we can use the `POST` method. The `POST` request looks like this:

```tsx
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "Hello, World!",
    body: "This is a post request.",
    userId: 1,
  }),
});
```

- In the above example, we are using the `fetch` function to POST data to the JSONPlaceholder API. We are using the `POST` method to send a request with the following headers and body:

```tsx
const postData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "Hello, World!",
        body: "This is a post request.",
        userId: 1,
      }),
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};
```

# Difference between `PATCH` and `PUT`

- `PATCH` and `PUT` are HTTP methods that are used to update data in an API. `PATCH` is used to update a partial data in an API, while `PUT` is used to replace the entire data in an API.

```tsx
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PATCH",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "Hello, World!",
  }),
});
```

- In the above example, we are using the `PATCH` method to update a partial data in the JSONPlaceholder API. We are using the `PUT` method to replace the entire data in the JSONPlaceholder API.

```tsx
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "Hello, World!",
  }),
});
```

- In the above example, we are using the `PUT` method to replace the entire data in the JSONPlaceholder API.
