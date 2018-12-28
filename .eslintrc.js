module.exports = {
  'parser': 'babel-eslint',
  'parserOptions': {
    'ecmaVersion': 2017,
    'sourceType': 'module',
    'ecmaFeatures': {
      // @TODO Deprecated https://eslint.org/docs/user-guide/configuring#deprecated
      'experimentalObjectRestSpread': true,
      'jsx': true,
      'modules': true
    }
  },
  'root': true,
  'extends': [
    'eslint-config-alloy/react',
    'umi',
    'plugin:flowtype/recommended'
  ],
  'plugins': [
    'flowtype'
  ],
  'env': {
    'browser': true,
    'node': true,
    'commonjs': true,
    'es6': true
  },
  'rules': {
    // @fixable 一个缩进必须用两个空格替代
    'indent': [
      'error',
      2,
      {
        'SwitchCase': 1,
        'flatTernaryExpressions': true
      }
    ],
    // @fixable jsx 的 children 缩进必须为两个空格
    'react/jsx-indent': ['error', 2],
    // @fixable jsx 的 props 缩进必须为两个空格
    'react/jsx-indent-props': ['error', 2],
    'jsx-a11y/href-no-hash': 'off',
    'no-unused-vars': [2],
    'no-undefined': [1],
    // 无法为代码确定适当的复杂性限制，则最好禁用此规则。
    'complexity': 'off',
  }
}
