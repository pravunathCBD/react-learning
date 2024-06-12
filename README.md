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
