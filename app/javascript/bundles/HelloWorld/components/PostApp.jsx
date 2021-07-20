import axios from 'axios';
import { Provider, useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import store from '../store/store';
import PostContainer from './PostContainer';

const PostApp = () => {
  return (
    <Provider store={store}>
      <PostContainer></PostContainer>
    </Provider>
  );
};

export default PostApp;
