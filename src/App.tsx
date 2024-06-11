import PropComponent from './components/PropComponent';

const App = () => {
  return (
    <div>
      <p className='font-medium'>Test app</p>
      <PropComponent
        title='Hello, world!'
        // description='This is a test description.'
      />
    </div>
  );
};

export default App;
