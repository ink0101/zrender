import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Link from 'umi/link';

class Index extends Component {
  render() {
    return (
      <div className="main">
        <ul>
          <li>
            <Link to="/demo/displayable">可显示的元素</Link>
          </li>
          <li>
            <Link to="/demo/pattern">纹理图案显示</Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link to="/example/animation">官方示例 - 动画</Link>
          </li>
          <li>
            <Link to="/example/boundingBox">官方示例 - 包围盒</Link>
          </li>
          <li>
            <Link to="/example/clipPath">官方示例 - 剪裁路径</Link>
          </li>
          <li>
            <Link to="/example/glitchedText">官方示例 - 故障效果文字</Link>
          </li>
          <li>
            <Link to="/example/helloWorld">官方示例 - helloWorld</Link>
          </li>
          <li>
            <Link to="/example/particles">官方示例 - 粒子动画</Link>
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