// import React from 'react';
// import FormComponent from './components/FormComponent';
// import HooksComponent from './components/HooksComponent';
// import ListUsers from './components/ListUsers';
// import StateComponent from './components/StateComponent';
// // import PropComponent from './components/PropComponent';
// import { users } from './utils/mock';

import React from 'react';
import { IPost } from './types/entities';
import {
  createPost,
  deletePost,
  fetchPosts,
  updatePost,
} from './apis/requests/posts.requests';
import { ICreatePost } from './types/requests';

const App = () => {
  const [postToBeEdited, setPostToBeEdited] = React.useState<IPost | null>(
    null
  );
  const [posts, setPosts] = React.useState<IPost[]>([]);
  const [formData, setFormData] = React.useState<ICreatePost>({
    title: '',
    views: 0,
  });

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const onSubmit = async () => {
    try {
      const createdPost = await createPost(formData);

      const updatedPosts = [...posts, createdPost];
      setPosts(updatedPosts);

      setFormData({
        title: '',
        views: 0,
      });
    } catch {
      console.error('Something went wrong');
    }
  };

  const handleDelete = async (id: string | number) => {
    try {
      await deletePost(id);
      const updatedPosts = posts.filter((post) => post.id !== id);
      setPosts(updatedPosts);
    } catch {
      console.error('Something went wrong');
    }
  };

  const handleUpdate = async (id: string | number) => {
    try {
      const updatedPost = await updatePost(id, formData);
      const updatedPosts = posts.map((post) => {
        if (post.id === id) {
          return updatedPost;
        }
        return post;
      });
      setPosts(updatedPosts);
      setPostToBeEdited(null);
      setFormData({
        title: '',
        views: 0,
      });
    } catch {
      console.error('Something went wrong');
    }
  };

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

      {posts &&
        posts.map((post) => (
          <div className='flex items-center gap-4'>
            <p key={post.id}>{post.title}</p>
            <p>{post.views}</p>
            <button
              onClick={() => {
                setPostToBeEdited(post);
                setFormData({
                  title: post.title,
                  views: post.views,
                });
              }}
            >
              Edit
            </button>
            <button onClick={() => handleDelete(post.id)}>Delete post</button>
          </div>
        ))}
      <form
        onSubmit={(e) => {
          e.preventDefault();

          if (postToBeEdited) {
            handleUpdate(postToBeEdited.id);
            setPostToBeEdited(null);
          } else {
            onSubmit();
          }
        }}
      >
        <input
          required
          name='title'
          value={formData.title}
          onChange={handleOnChange}
        />
        <input
          value={formData.views}
          type='number'
          min={0}
          name='views'
          readOnly={!postToBeEdited}
          onChange={handleOnChange}
        />

        <button type='submit'>
          {postToBeEdited ? 'Update post' : 'Create post'}
        </button>
      </form>
    </div>
  );
};

export default App;
