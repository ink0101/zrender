import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import zrender from 'zrender';

const style = {
  height: '200px',
  width: '200px',
  display: 'inline-block',
  backgroundColor: '#e1e1e1',
  marginLeft: '16px',
};
const stroke = '#000';

class demo1 extends Component {
  componentDidMount() {
    // console.log(this.refDom);
    // console.log('zr', zr);
    this.initZr1();
    this.initZr2();
    this.initZr3();
  }
  initZr = (dom, options) => {
    const zr = zrender.init(dom);

    for (const item of options) {
      const type = item.type;
      const opt = item.opt;
      const canvas = new zrender[type](opt);

      zr.add(canvas);
    }
  }
  initZr1 = () => {
    const options = [
      {
        type: 'Circle',
        opt: {
          shape: {
            cx: 100,
            cy: 100,
            r: 40
          },
          style: {
            fill: 'none',
            stroke,
            text: '圆形'
          }
        }
      }
    ];
    this.initZr(this.refDom1, options);
  }
  initZr2 = () => {
    const options = [
      {
        type: 'Arc',
        opt: {
          shape: {
            cx: 50,
            cy: 50,
            r: 40,
            // 角度如何计算？
            startAngle: 180 * Math.PI / 180,
            // endAngle: 180,
            // clockwise: false
          },
          style: {
            fill: 'none',
            stroke,
            text: '圆弧'
          },
        },
      },
      {
        type: 'Arc',
        opt: {
          shape: {
            cx: 150,
            cy: 50,
            r: 40,
            startAngle: 180 * Math.PI / 180,
          },
          style: {
            fill: '#000',
            stroke,
            text: '圆弧'
          }
        }
      }
    ];
    this.initZr(this.refDom2, options);
  }
  initZr3 = () => {
    const options = [
      {
        type: 'BezierCurve',
        opt: {
          shape: {
            x1: 50,
            y1: 50,
            x2: 150,
            y2: 150,
            cpx1: 50,
            cpy1: 150,
            cpx2: 150,
            cpy2: 100,
          },
          style: {
            fill: 'none',
            stroke,
            text: '贝塞尔曲线'
          }
        }
      }
    ];
    this.initZr(this.refDom3, options);
  }

  render() {
    console.log(zrender);

    return (
      <div>
        <p>demo1</p>

        <div>
          <div ref={(dom) => { this.refDom1 = dom }} style={style}></div>

          <div ref={(dom) => { this.refDom2 = dom }} style={style}></div>

          <div ref={(dom) => { this.refDom3 = dom }} style={style}></div>
        </div>

      </div>
    );
  }
}

export default demo1;