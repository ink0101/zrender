import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import zrender from 'zrender';
// import img from '../assets/1.jpeg';

const style = {
  height: '200px',
  width: '200px',
  display: 'inline-block',
  backgroundColor: '#f1f1f1',
  marginLeft: '16px',
};
const stroke = '#999';

const arr = [...Array(11)];

class demo1 extends Component {
  componentDidMount() {
    this.initZr1();
    this.initZr2();
    this.initZr3();
    this.initZr4();
    this.initZr5();
    this.initZr6();
    this.initZr7();
    this.initZr8();
    this.initZr9();
    this.initZr10();
  }
  initZr = (dom, options) => {
    const zr = zrender.init(dom);

    for (const item of options) {
      const type = item.type;
      const opts = item.opts;
      const canvas = new zrender[type](opts);

      zr.add(canvas);
    }
  }
  initZr1 = () => {
    const options = [
      {
        type: 'Circle',
        opts: {
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
        opts: {
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
        opts: {
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
        opts: {
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
  initZr4 = () => {
    const options = [
      {
        type: 'Droplet',
        opts: {
          shape: {
            cx: 100,
            cy: 100,
            width: 30,
            height: 50,
          },
          style: {
            // fill: '#000',
            fill: 'none',
            stroke,
            text: '水滴'
          }
        }
      }
    ];
    this.initZr(this.refDom4, options);
  }
  initZr5 = () => {
    const options = [
      {
        type: 'Ellipse',
        opts: {
          shape: {
            cx: 100,
            cy: 100,
            rx: 50,
            ry: 20
          },
          style: {
            // fill: '#000',
            fill: 'none',
            stroke,
            text: '椭圆'
          }
        }
      }
    ];
    this.initZr(this.refDom5, options);
  }
  initZr6 = () => {
    const options = [
      {
        type: 'Heart',
        opts: {
          shape: {
            cx: 100,
            cy: 70,
            width: 40,
            height: 60
          },
          style: {
            // fill: '#000',
            fill: 'none',
            stroke,
            text: '心形'
          }
        }
      }
    ];
    this.initZr(this.refDom6, options);
  }
  initZr7 = () => {
    const options = [
      {
        type: 'Image',
        opts: {
          shape: {
          },
          style: {
            // fill: '#000',
            image: '../assets/1.jpeg',
            x: 50,
            y: 50,
            width: 100,
            height: 100,
            // fill: 'none',
            // stroke,
            // text: '心形'
          }
        }
      }
    ];
    this.initZr(this.refDom7, options);
  }
  initZr8 = () => {
    const options = [
      {
        type: 'Isogon',
        opts: {
          shape: {
            x: 50,
            y: 50,
            r: 45,
            n: 3,
          },
          style: {
            // fill: '#000',
            fill: 'none',
            stroke,
            text: '正三角形'
          }
        }
      },
      {
        type: 'Isogon',
        opts: {
          shape: {
            x: 150,
            y: 50,
            r: 45,
            n: 4,
          },
          style: {
            // fill: '#000',
            fill: 'none',
            stroke,
            text: '正四边形'
          }
        }
      },
      {
        type: 'Isogon',
        opts: {
          shape: {
            x: 50,
            y: 150,
            r: 45,
            n: 5,
          },
          style: {
            // fill: '#000',
            fill: 'none',
            stroke,
            text: '正五边形'
          }
        }
      },
      {
        type: 'Isogon',
        opts: {
          shape: {
            x: 150,
            y: 150,
            r: 45,
            n: 6,
          },
          style: {
            // fill: '#000',
            fill: 'none',
            stroke,
            text: '正六边形'
          }
        }
      }
    ];
    this.initZr(this.refDom8, options);
  }
  initZr9 = () => {
    const options = [
      {
        type: 'Line',
        opts: {
          shape: {
            x1: 10,
            y1: 10,
            x2: 190,
            y2: 190,
          },
          style: {
            // fill: '#000',
            fill: 'none',
            stroke,
            text: '线',

          }
        }
      },
      {
        type: 'Line',
        opts: {
          shape: {
            x1: 190,
            y1: 10,
            x2: 10,
            y2: 190,
          },
          style: {
            // fill: '#000',
            fill: 'none',
            stroke,
            text: '线',

          }
        }
      }
    ];
    this.initZr(this.refDom9, options);
  }
  initZr10 = () => {
    const options = [
      {
        type: 'Polygon',
        opts: {
          shape: {
            points: [
              [50, 10],
              [10, 100],
              [90, 100]
            ]
          },
          style: {
            // fill: '#000',
            fill: 'none',
            stroke,
            text: '三角形',
          }
        }
      },
      {
        type: 'Polygon',
        opts: {
          shape: {
            // 要注意顺序，图形是点依次连接得到
            points: [
              [100, 100],
              [190, 100],
              [190, 10],
              [100, 10],
            ]
          },
          style: {
            // fill: '#000',
            fill: 'none',
            stroke,
            text: '四边形',
          }
        }
      },
      {
        type: 'Polygon',
        opts: {
          shape: {
            // 要注意顺序，图形是点依次连接得到
            points: [
              [50, 110],
              [10, 150],
              [30, 190],
              [80, 190],
              [90, 150]
            ]
          },
          style: {
            // fill: '#000',
            fill: 'none',
            stroke,
            text: '五边形',
          }
        }
      },
      {
        type: 'Polygon',
        opts: {
          shape: {
            // 要注意顺序，图形是点依次连接得到
            points: [
              [100, 190],
              [190, 110],
              [190, 190],
              [100, 110],
            ]
          },
          style: {
            // fill: '#000',
            fill: 'none',
            stroke,
            text: '',
          }
        }
      },
    ];
    this.initZr(this.refDom10, options);
  }

  render() {
    return (
      <div>
        <p>demo1</p>

        <div>
          {arr.map((item, index) =>
            <div key={index} ref={(dom) => { this[`refDom${index + 1}`] = dom }} style={style}></div>
          )}
        </div>

      </div>
    );
  }
}

export default demo1;