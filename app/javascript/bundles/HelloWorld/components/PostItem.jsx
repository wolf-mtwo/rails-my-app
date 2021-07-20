import PropTypes from 'prop-types';
import React from 'react';

const PostItem = ({ post }) => {
  return (
    <div className="card">
      <img src="/images/pexels-mati-mango-7878222.jpg" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.description}</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  );
};

export default PostItem;
