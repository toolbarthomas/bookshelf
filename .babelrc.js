module.exports = {
  presets: ['@babel/preset-env'],
  plugins: [
    ['babel-plugin-styled-components'],
    [
      'babel-plugin-root-import',
      {
        paths: [
          {
            rootPathPrefix: '~',
            rootPathSuffix: 'src'
          }
        ]
      }
    ]
  ]
}
