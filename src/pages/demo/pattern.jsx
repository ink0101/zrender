import React, { Component } from 'react';
import zrender from 'zrender';

import img from '../../assets/2.jpeg';

class pattern extends Component {
  componentDidMount() {
    this.init();
  }
  init = () => {
    const dom = this.refDom;
    const zr = zrender.init(dom);
    const width = zr.getWidth();
    const height = zr.getHeight();

    const imgObj = new Image();
    imgObj.src = img;
    const pattern = new zrender.Pattern(imgObj, 'repeat');

    const show = new zrender.Rect({
      shape: {
        cx: 0,
        cy: 0,
        width: width,
        height: height,
      },
      style: {
        fill: pattern,
      },
      zlevel: -1,
    });

    zr.add(show);
  }
  render() {
    return (
      <div>
        <div className="container" ref={(dom) => { this.refDom = dom }}></div>
      </div>
    );
  }
}

export default pattern;