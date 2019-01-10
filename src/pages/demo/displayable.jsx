import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import zrender from 'zrender';
// import img from '../assets/1.jpeg';

const style = {
  height: '200px',
  width: '200px',
  display: 'inline-block',
  backgroundColor: '#fff',
  marginLeft: '8px',
  // marginBottom: '16px',
};
const stroke = '#999';

const arr = [...Array(16)];

class displayable extends Component {
  componentDidMount() {
    // 圆
    this.initCirle();
    // 圆弧
    this.initArc();
    // 贝塞尔曲线
    this.initBezierCurve();
    // 水滴
    this.initDroplet();
    // 椭圆
    this.initEllipse();
    // 心形
    this.initHeart();
    // 图片
    this.initImage();
    // 正多边形
    this.initIsogon();
    // 线条
    this.initLine();
    // 多边形
    this.initPolygon();
    // 多边形折线段
    this.initPolyline();
    // 矩形
    this.initRect();
    // 玫瑰线
    this.initRose();
    // 扇形
    this.initSector();
    // 星星
    this.initStar();
    // 文字
    this.initText();
    // 内外旋轮曲线
    this.initTrochoid();
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
  initCirle = () => {
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
  initArc = () => {
    const options = [
      {
        type: 'Arc',
        opts: {
          shape: {
            cx: 50,
            cy: 50,
            r: 40,
            // 角度如何计算？
            startAngle: Math.PI,
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
            startAngle: Math.PI,
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
  initBezierCurve = () => {
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
  initDroplet = () => {
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
  initEllipse = () => {
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
  initHeart = () => {
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
  initImage = () => {
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
  initIsogon = () => {
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
  initLine = () => {
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
  initPolygon = () => {
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
  initPolyline = () => {
    const options = [
      {
        type: 'Polyline',
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
        type: 'Polyline',
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
        type: 'Polyline',
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
        type: 'Polyline',
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
    this.initZr(this.refDom11, options);
  }
  initRect = () => {
    const options = [
      {
        type: 'Rect',
        opts: {
          shape: {
            x: 10,
            y: 10,
            width: 80,
            height: 180,
          },
          style: {
            // fill: '#000',
            fill: 'none',
            stroke,
            text: '矩形',
          }
        },
      },
      {
        type: 'Rect',
        opts: {
          shape: {
            r: [5, 10, 15, 20],
            x: 105,
            y: 10,
            width: 80,
            height: 180,
          },
          style: {
            // fill: '#000',
            fill: 'none',
            stroke,
            text: '圆角矩形',
          }
        },
      }
    ];
    this.initZr(this.refDom12, options);
  }
  initRose = () => {
    const options = [
      {
        type: 'Rose',
        opts: {
          shape: {
            cx: 100,
            cy: 100,
            r: [100, 50],
            k: 1,
            n: 2
          },
          style: {
            // fill: '#000',
            fill: 'none',
            stroke,
            text: '谜一样的玫瑰线',
          }
        },
      }
    ];

    this.initZr(this.refDom13, options);
  }
  initSector = () => {
    const options = [
      {
        type: 'Sector',
        opts: {
          shape: {
            cx: 100,
            cy: 100,
            r: 50,
            // 内半径
            r0: 20,
            startAngle: 0,
            endAngle: Math.PI,
            // 顺时针
            clockwise: false,
          },
          style: {
            // fill: '#000',
            fill: 'none',
            stroke,
            text: '扇形',
          }
        },
      },
    ];

    this.initZr(this.refDom14, options);
  }
  initStar = () => {
    const options = [
      {
        type: 'Star',
        opts: {
          shape: {
            cx: 100,
            cy: 100,
            n: 5,
            r: 60,
            r0: 30,
          },
          style: {
            // fill: '#000',
            fill: 'none',
            stroke,
            text: '星星',
          },
        },
      },
    ];

    this.initZr(this.refDom15, options);
  }
  initText = () => {
    const options = [
      {
        type: 'Text',
        opts: {
          style: {
            text: '文字',
            textAlign: 'center',
            textVerticalAlign: 'middle',
            textFill: '#f0f',
          },
          position: [100, 100],
        }
      }
    ];

    this.initZr(this.refDom15, options);
  }
  initTrochoid = () => {
    const options = [
      {
        type: 'Trochoid',
        opts: {
          shape: {
            cx: 100,
            cy: 100,
            r: 50,
            r0: 10,
            d: 50,
            n: 'out',
          },
          style: {
            // fill: '#000',
            fill: 'none',
            stroke,
            text: '内外旋轮曲线',
          },
        },
      },
    ];

    this.initZr(this.refDom16, options);
  }

  render() {
    return (
      <div>
        <p>zrender.Displayable，可显示的元素，继承自 zrender.Element。</p>

        <div>
          {arr.map((item, index) =>
            <div key={index} ref={(dom) => { this[`refDom${index + 1}`] = dom }} style={style}></div>
          )}
        </div>

      </div>
    );
  }
}

export default displayable;