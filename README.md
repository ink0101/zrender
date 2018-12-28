# zrender
zrender demo

## 如何开始使用？

正常安装，然后import引入即可使用。

```
npm install zrender
```

在使用之前，需要初始化 zrender 实例，具体方式就是传入一个 DOM 容器。（注意容器需要有高度）

```
<!-- dom 容器 -->
<div ref={(dom) => { this.refDom = dom }} style={{ height: '200px' }}></div>

<!-- 初始化 zrender 实例 -->
const zr = zrender.init(this.refDom);
```

## 简单图形的绘制

* 弧形
