import React, { Component } from 'react';
import zrender from 'zrender';


class helloWorld extends Component {
  componentDidMount() {
    this.init();
  }
  init = () => {
    const dom = this.refDom;
    const zr = zrender.init(dom);

    const width = zr.getWidth();
    const height = zr.getHeight();

    const sun = new zrender.Circle({
      shape: {
        // cx: 0,
        // cy: 0,
        r: 50,
      },
      style: {
        fill: '#FF904F',
      },
      position: [width / 2, height / 2],
    });
    const water = new zrender.Rect({
      shape: {
        cx: 0,
        cy: 0,
        width,
        height: height / 2,
      },
      style: {
        fill: new zrender.RadialGradient(0.5, -0.1, 1, [
          {
            offset: 0,
            color: '#FFB166',
          },
          {
            offset: 0.2,
            color: '#D7C467',
          },
          {
            offset: 1,
            color: '#37B0FF',
          }
        ])
      },
      position: [0, height / 2],
    });
    const sky = new zrender.Rect({
      shape: {
        cx: 0,
        cy: 0,
        width: width,
        height: height,
      },
      style: {
        fill: '#D7F9FF',
      },
      zlevel: -1,
    });

    zr.add(sun);
    zr.add(water);
    zr.add(sky);
  }
  render() {
    return (
      <div>
        <div ref={(dom) => { this.refDom = dom }} className="container"></div>
      </div>
    );
  }
}

export default helloWorld;