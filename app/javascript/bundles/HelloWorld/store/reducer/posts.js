import { types }  from '../actions/posts';

const item = {
  posts: [],
  loading: false
};

export default function counter(state = item, action) {
  console.log(action);
  switch (action.type) {
  case types.LOADING:
    return {
      loading: true,
      posts: []
    };
  case types.POSTS:
    return {
      loading: false,
      posts: action.data
    };
  default:
    return state;
  }
}
