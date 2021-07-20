import axios from 'axios';
import { Provider, useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import PostList from './PostList';
import PostItem from './PostItem';
import store from '../store/store';
import { loading, load } from '../store/actions/posts';

const PostContainer = () => {
  // const [posts, setPosts] = useState([]);

  const dispatch = useDispatch();

  const loadPost = () => {
    dispatch(loading());
    setTimeout(() => {
      axios.get('/users/1/posts', {
        headers: {
          Accept: 'application/json'
        }
       })
      .then(function(res) {
        dispatch(load(res.data));
      })
      .catch(function(err) {
        console.log(err);
      })
    }, 2000);
  };

  useEffect(() => {
    loadPost();
  }, []);

  return (
    <PostList></PostList>
  );
};

export default PostContainer;
