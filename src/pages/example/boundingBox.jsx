import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import zrender from 'zrender';

class boundingBox extends Component {
  componentDidMount() {
    this.init();
  }
  init = () => {
    const dom = this.refDom;
    const zr = zrender.init(dom);

    const width = zr.getWidth();
    const height = zr.getHeight();

    let isMouseDown = false;

    // 绑定事件
    zr.on('mousedown', () => {
      isMouseDown = true;
    });
    zr.on('mouseup', () => {
      isMouseDown = false;
    });

    const style = {
      stroke: '#ccc',
      fill: 'white',
    };

    const group = new zrender.Group();

    for (let i = 0; i < 10; ++i) {
      const r = 50 * Math.random() + 20;
      const circle = new zrender.Circle({
        shape: {
          cx: 0,
          cy: 0,
          r: r
        },
        position: [
          (width * 0.6 - r * 2) * Math.random() + r + width * 0.2,
          (height * 0.6 - r * 2) * Math.random() + r + height * 0.2
        ],
        style: style,
        // 可拖动
        draggable: true
      }).on('mousemove', function() {
        if (isMouseDown) {
          const rect = group.getBoundingRect();

          boundingRect.setShape({
            x: rect.x,
            y: rect.y,
            width: rect.width,
            height: rect.height
          });
        }
      });
      group.add(circle);
    }

    zr.add(group);

    const rect = group.getBoundingRect();
    const boundingRect = new zrender.Rect({
      shape: {
        cx: 0,
        cy: 0,
        x: rect.x,
        y: rect.y,
        width: rect.width,
        height: rect.height
      },
      style: {
        fill: 'none',
        stroke: '#14f1ff'
      }
    });

    zr.add(boundingRect);
  }
  render() {
    return (
      <div>
        <div ref={(dom) => { this.refDom = dom }} className="container" ></div>
      </div>
    );
  }
}

export default boundingBox;