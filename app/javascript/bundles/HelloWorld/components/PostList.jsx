import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PostItem from './PostItem';

// const PostList = ({ posts }) => {
const PostList = () => {
  const { loading, posts } = useSelector((state) => state);
  
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    setItems(posts);
    console.log(loading, posts);
  }, [posts]);

  useEffect(() => {
    setIsLoading(loading);
  }, [isLoading]);

  return (
    <div className="container pt-3">
      <div className="row">
        {
          !loading ?
          items.map((post, index) => (
            <div className="col-4">
              <PostItem post={post} key={index}></PostItem>
            </div>
          ))
          :
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        }
      </div>
    </div>
  );
};

export default PostList;
