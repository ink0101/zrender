import React, { Component } from 'react';
import zrender from 'zrender';

class glitchedText extends Component {
  componentDidMount() {
    this.init();
  }
  init = () => {
    const dom = this.refDom;
    const zr = zrender.init(dom);

    const width = zr.getWidth();
    const height = zr.getHeight();

    const text1 = new zrender.Text({
      style: {
        text: 'zrender',
        textAlign: 'center',
        textVerticalAlign: 'middle',
        fontSize: 200,
        fontFamily: 'Lato',
        fontWeight: 'bolder',
        textFill: '#0ff',
        blend: 'lighten',
      },
      position: [width / 2 + 5, height / 2],
    });

    const text2 = new zrender.Text({
      style: {
        text: 'zrender',
        textAlign: 'center',
        textVerticalAlign: 'middle',
        fontSize: 200,
        fontFamily: 'Lato',
        fontWeight: 'bolder',
        textFill: '#f0f',
        blend: 'lighten',
      },
      position: [width / 2 - 5, height / 2],
    });

    const text3 = new zrender.Text({
      style: {
        text: 'zrender',
        textAlign: 'center',
        textVerticalAlign: 'middle',
        fontSize: 200,
        fontFamily: 'Lato',
        fontWeight: 'bolder',
        textFill: '#fff',
        blend: 'lighten',
      },
      position: [width / 2, height / 2],
    });

    const lines = [];

    zr.add(text1);
    zr.add(text2);
    zr.add(text3);

    for (let i = 0; i < 16; i++) {
      const line = new zrender.Rect({
        shape: {
          x: width * (Math.random() - 0.3),
          y: height * Math.random(),
          width: width * (Math.random() + 0.3),
          height: Math.random() * 8,
        },
        style: {
          fill: ['#ff0', '#f0f', '#0ff', '#00f'][Math.floor(Math.random() * 4)],
          blend: 'lighten',
          opacity: 0,
        },
      });
      zr.add(line);
      lines.push(line);
    }

    setInterval(function () {
      if (Math.random() > 0.2) {
        text2.attr('position', [width / 2 + Math.random() * 50, height / 2]);

        for (let i = 0; i < lines.length; ++i) {
          lines[i].attr('shape', {
            x: width * Math.random(),
            y: height * Math.random(),
            width: width * Math.random(),
            height: Math.random() * 8
          });
          lines[i].attr('style', {
            opacity: 1
          });
        }

        setTimeout(function () {
          text2.attr('position', [width / 2 - 5, height / 2]);

          for (let i = 0; i < lines.length; ++i) {
            lines[i].attr('style', {
              opacity: 0
            });
          }
        }, 100);
      }
    }, 500);
  }
  render() {
    return (
      <div>
        <div ref={(dom) => { this.refDom = dom }} className="container" style={{ backgroundColor: '#333' }} ></div>
      </div>
    );
  }
}

export default glitchedText;