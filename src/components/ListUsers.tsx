import React from 'react';
import { users as dummyUsers } from '../utils/mock';

export interface ListUsersProps {
  users?: typeof dummyUsers;
  onCompletion: (users?: typeof dummyUsers) => void;
}

const ListUsers: React.FC<ListUsersProps> = ({ users, onCompletion }) => {
  const sortedUsers = users?.sort((a, b) => a.age - b.age);

  return (
    <div className='space-y-4'>
      <button
        type='button'
        onClick={() => onCompletion(sortedUsers)}
        className='px-4 py-2 rounded-lg bg-indigo-800 text-white'
      >
        Callback button
      </button>
      {sortedUsers?.map((user) => (
        <div key={user?.id} className='p-4 border border-gray-200 rounded-md'>
          <p className='text-lg font-semibold'>{user?.name}</p>
          <p>{user?.email}</p>
          <p>{user?.age} years old</p>
        </div>
      ))}
    </div>
  );
};

export default ListUsers;
