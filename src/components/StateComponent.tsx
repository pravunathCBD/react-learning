import React from 'react';
import { users } from '../utils/mock';

const StateComponent = () => {
  const [usersData, setUsersData] = React.useState<typeof users | undefined>();

  const addNewUser = () => {
    const newUser = {
      id: Math.floor(Math.random() * 100),
      name: 'Katie Brown',
      age: 31,
      email: 'katie@brown',
    };

    setUsersData((prev) => (prev ? [...prev, newUser] : [newUser]));
  };

  return (
    <div>
      <p>Users Data from state:</p>
      {usersData &&
        usersData.map((user) => (
          <div key={user.id}>
            <p>{user.name}</p>
            <p>{user.age}</p>
            <p>{user.email}</p>
          </div>
        ))}

      {!usersData && <p>No users data available.</p>}

      <button
        type='button'
        onClick={addNewUser}
        className='px-4 py-2 rounded-lg bg-indigo-800 text-white'
      >
        Add new user
      </button>
    </div>
  );
};

export default StateComponent;
