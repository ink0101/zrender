import React, { Component } from 'react';
import zrender from 'zrender';

class particles extends Component {
  componentDidMount() {
    clearInterval(this.timer);
    this.init();
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  init = () => {
    const dom = this.refDom;
    const zr = zrender.init(dom);

    const width = zr.getWidth();
    const height = zr.getHeight();

    const spray = (x, y) => {
      const cnt = 200;
      const centerTolerance = 0;
      const radius = 10;
      const particles = [];
      const duration = 3000;
      const color = Math.random() * 260;
      const maxVx = 1000 + Math.random() * 1500;
      const maxVy = 1000 + Math.random() * 1500;

      for (let i = 0; i < cnt; i++) {
        const x0 = x + centerTolerance * (Math.random() - 1);
        const y0 = y + centerTolerance * (Math.random() - 1);
        const opacity = Math.random() * 0.5 + 0.5;

        const particle = new zrender.Circle({
          shape: {
            cx: 0,
            cy: 0,
            r: radius * (0.5 + 0.5 * Math.random()),
          },
          style: {
            fill: `hsl(${Math.floor(color + Math.random() * 100)}, 80%, ${Math.floor(Math.random() * 40 + 40)}%)`,
            opacity,
          },
          position: [x0, y0],
        });

        zr.add(particle);
        particles.push(particle);

        particle._t = 0;
        particle._opacity = opacity;

        const animator = particle.animate('');
        const vx = (Math.random() - 0.5) * maxVx;
        let vy = (Math.random() - 1.2) * maxVy;
        const ay = 8000;
        let t0 = 0;

        animator.when(duration, {
          _t: 1,
        })
          .during((p, _t) => {
            const dt = _t - t0;
            const x1 = p.position[0] + vx * dt;
            const y1 = p.position[1] + vy * dt;

            p.position = [x1, y1];
            p.setStyle({
              opacity: p._opacity * (1 - _t),
            });

            vy = vy + ay * dt;
            t0 = _t;
          })
          .done(() => {
            zr.remove(particle);
          })
          .start();
      }
    };

    spray(width / 2, height / 2);
    this.timer = setInterval(() => {
      spray(width * Math.random(), height * Math.random());
    }, 1000);
  }
  render() {
    return (
      <div>
        <div ref={(dom) => { this.refDom = dom }} className="container" ></div>
      </div>
    );
  }
}

export default particles;