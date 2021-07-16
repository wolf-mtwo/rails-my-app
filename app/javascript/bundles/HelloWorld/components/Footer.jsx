import PropTypes from 'prop-types';
import React from 'react';

const Footer = () => {
  return (
    <div className="container pt-3">
      <div className="row">
        <div className="col">
          <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
              <h3>
                All right reserved!!
              </h3>
              <li className="page-item disabled">
                <a className="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
              </li>
              <li className="page-item"><a className="page-link" href="#">1</a></li>
              <li className="page-item"><a className="page-link" href="#">2</a></li>
              <li className="page-item"><a className="page-link" href="#">3</a></li>
              <li className="page-item">
                <a className="page-link" href="#">Next</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Footer;
