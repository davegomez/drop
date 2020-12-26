// babel.config.js
if (process.env.BABEL_ENV === 'test') {
  module.exports = {
    presets: [
      ['@babel/preset-env', { targets: { node: 'current' } }],
      '@babel/preset-typescript',
    ],
  };
}
