import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import zrender from 'zrender';
import { Button } from 'antd';

const style = {
  width: '100%',
  height: '400px',
  backgroundColor: '#fff',
};

class animation extends Component {
  state = {
    animation: null,
  }
  componentDidMount() {
    this.init();
  }
  init = () => {
    const dom = this.refDom;
    const zr = zrender.init(dom);

    const width = zr.getWidth();
    const height = zr.getHeight();

    const r = 30;

    const circle = new zrender.Circle({
      shape: {
        cx: r + 1,
        cy: height / 2,
        r,
      },
      style: {
        fill: 'transparent',
        stroke: '#FF6EBE'
      },
      silent: true,
    });

    // 动画
    const obj = circle.animate('shape', true)
      .when(5000, {
        cx: width - 2 * r
      })
      .when(10000, {
        cx: r + 1
      })
      .when(5000, {
        r: 2 * r,
      })
      .when(10000, {
        r,
      })
      .start();

    zr.add(circle);

    this.setState({
      animation: obj,
    });
  }
  pauseAnimation = () => {
    const { animation } = this.state;

    animation.pause();
  }
  resumeAnimation = () => {
    const { animation } = this.state;

    animation.resume();
  }
  render() {
    return (
      <div>
        <div>
          <Button onClick={this.pauseAnimation}>暂停</Button>
          <Button onClick={this.resumeAnimation}>恢复</Button>
        </div>

        <div ref={(dom) => { this.refDom = dom }} style={style} ></div>
      </div>
    );
  }
}

export default animation;