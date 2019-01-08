import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Link from 'umi/link';

class Index extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/demo/displayable">可显示的元素</Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link to="/example/animation">官方实例 - 动画</Link>
          </li>
        </ul>

        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Index;