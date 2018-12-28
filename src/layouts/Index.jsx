import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Link from 'umi/link';

class Index extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/demo1">demo1</Link>
          </li>
        </ul>

        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

Index.propTypes = {

};

export default Index;