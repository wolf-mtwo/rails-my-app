
export const types = {
  LOADING: 'loading',
  POSTS: 'posts',
};

export const loading = () => (
  {
    type: types.LOADING
  }
);

export const load = (data) => (
  {
    type: types.POSTS,
    data
  }
);
