import PropTypes from 'prop-types';
import React from 'react';

const Footer = ({ post }) => {
  return (
    <div class="card">
      <img src="/images/pexels-mati-mango-7878222.jpg" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{post.title}</h5>
        <p class="card-text">{post.description}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  );
};

export default Footer;
