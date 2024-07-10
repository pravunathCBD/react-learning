// import React from 'react';
// import FormComponent from './components/FormComponent';
// import HooksComponent from './components/HooksComponent';
// import ListUsers from './components/ListUsers';
// import StateComponent from './components/StateComponent';
// // import PropComponent from './components/PropComponent';
// import { users } from './utils/mock';

import React from 'react';
import { IPost } from './types/entities';
import { fetchPosts } from './apis/requests/posts.requests';

const App = () => {
  const [posts, setPosts] = React.useState<IPost[]>([]);

  React.useEffect(() => {
    const fetchPostsData = async () => {
      try {
        const postsData = await fetchPosts();
        setPosts(postsData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPostsData();
  }, []);

  console.log(posts);

  // const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   console.log('Button clicked!', e.currentTarget);
  // };

  // const [formData, setFormData] = React.useState<{
  //   name: string;
  //   email: string;
  //   password: string;
  // }>({
  //   name: '',
  //   email: '',
  //   password: '',
  // });

  // const onFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   console.log(formData);
  //   setFormData({
  //     name: '',
  //     email: '',
  //     password: '',
  //   });
  // };

  return (
    <div>
      <p className='font-medium'>Test app</p>
      {/* <PropComponent
        title='Hello, world!'
        // description='This is a test description.'
      /> */}

      {/* <FormComponent
        formData={formData}
        onFormChange={onFormChange}
        onSubmitHandler={onSubmitHandler}
      />

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

      <HooksComponent /> */}
    </div>
  );
};

export default App;
