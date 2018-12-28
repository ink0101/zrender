let path = require('path');
export default {
  plugins: [
    ['umi-plugin-react', {
      dva: {
        immer: true,
      },
      antd: true,
      singular: true,
      title: {
        defaultTitle: 'Zrender Demo'
      }
    }]
  ],
  lessLoaderOptions: {
    javascriptEnabled: true
  },
  alias: {
    "assets": path.resolve(__dirname, 'src/assets/')
  },
  disableDynamicImport: false,
  theme: {
    // body 背景色
    '@body-background': '#f3f3f3',
    // 主色
    "@primary-color": '#3495fe',
    // 链接色
    '@link-color': '#3495fe',
    // 主体文字大小
    "@font-size-base": '12px',
    // 常规文字
    '@text-color': '#000000',
    // 次级文字
    '@text-color-secondary': '#666666',
    // 失效文字
    '@disabled-color': '#c0c0c0',
    // 表格表头背景色
    '@table-header-bg': '#dfebf5',
  }
}
