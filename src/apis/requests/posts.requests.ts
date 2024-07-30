import { IPost } from '../../types/entities';
import { ICreatePost, IUpdatePost } from '../../types/requests';

export const fetchPosts = async (): Promise<IPost[]> => {
  const response = await fetch('http://localhost:5000/posts');

  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }

  return response.json();
};

export const createPost = async (payload: ICreatePost): Promise<IPost> => {
  const response = await fetch('http://localhost:5000/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error('Failed to create post');
  }

  return response.json();
};

export const deletePost = async (id: string | number): Promise<void> => {
  await fetch(`http://localhost:5000/posts/${id}`, {
    method: 'DELETE',
  });
};

export const updatePost = async (
  id: string | number,
  payload: IUpdatePost
): Promise<IPost> => {
  const response = await fetch(`http://localhost:5000/posts/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error('Failed to update post');
  }

  return response.json();
};
