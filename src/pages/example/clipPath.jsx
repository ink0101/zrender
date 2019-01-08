import React, { Component } from 'react';
import zrender from 'zrender';

class clipPath extends Component {
  componentDidMount() {
    this.init();
  }
  init = () => {
    const dom = this.refDom;
    const zr = zrender.init(dom);

    const width = zr.getWidth();
    const height = zr.getHeight();

    const circle = new zrender.Circle({
      shape: {
        cx: width / 2,
        cy: height / 2,
        r: 50,
      },
      style: {
        fill: '#ff6ebe',
      },
    });
    const heart = new zrender.Heart({
      shape: {
        cx: width / 2 + 20,
        cy: height / 2 - 40,
        width: 60,
        height: 80,
      },
    });

    // 剪裁元素，超出heart部分的部分将被剪裁掉
    circle.setClipPath(heart);

    zr.add(circle);

    const borderA = new zrender.Circle({
      shape: {
        cx: width / 2,
        cy: height / 2,
        r: 50
      },
      style: {
        fill: 'transparent',
        stroke: '#5ACFFF'
      }
    });
    zr.add(borderA);

    const borderB = new zrender.Heart({
      shape: {
        cx: width / 2 + 20,
        cy: height / 2 - 40,
        width: 60,
        height: 80
      },
      style: {
        fill: 'transparent',
        stroke: '#5ACFFF'
      }
    });

    zr.add(borderB);
  }
  render() {
    return (
      <div>
        <div ref={(dom) => { this.refDom = dom }} className="container" ></div>
      </div>
    );
  }
}

export default clipPath;