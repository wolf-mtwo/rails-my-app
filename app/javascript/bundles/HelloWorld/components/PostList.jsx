import PropTypes from 'prop-types';
import React from 'react';
import PostItem from './PostItem';

const Footer = ({ posts }) => {
  console.log(posts);
  return (
    <div className="container pt-3">
      <div className="row">
        {
          posts.map((post) => (
            <div className="col-4">
              <PostItem post={post}></PostItem>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Footer;
