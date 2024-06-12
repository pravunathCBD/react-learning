import ListUsers from './components/ListUsers';
// import PropComponent from './components/PropComponent';
import { users } from './utils/mock';

const App = () => {
  return (
    <div>
      <p className='font-medium'>Test app</p>
      {/* <PropComponent
        title='Hello, world!'
        // description='This is a test description.'
      /> */}

      <ListUsers users={users} />
    </div>
  );
};

export default App;
