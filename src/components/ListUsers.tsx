import React from 'react';
import { users as dummyUsers } from '../utils/mock';

export interface ListUsersProps {
  users?: typeof dummyUsers;
}

const ListUsers: React.FC<ListUsersProps> = ({ users }) => {
  const sortedUsers = users?.sort((a, b) => a.age - b.age);

  return (
    <div className='space-y-4'>
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
