import ListUsers from './components/ListUsers';
import StateComponent from './components/StateComponent';
// import PropComponent from './components/PropComponent';
import { users } from './utils/mock';

const App = () => {
  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log('Button clicked!', e.currentTarget);
  };

  return (
    <div>
      <p className='font-medium'>Test app</p>
      {/* <PropComponent
        title='Hello, world!'
        // description='This is a test description.'
      /> */}

      <ListUsers
        users={users}
        onCompletion={(usersData) => console.log(usersData)}
      />
      <button
        type='button'
        onClick={handleButtonClick}
        className='px-4 py-2 rounded-lg bg-indigo-800 text-white'
      >
        Cool button
      </button>

      <StateComponent />
    </div>
  );
};

export default App;
