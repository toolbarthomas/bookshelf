module.exports = {
  presets: ['@babel/preset-env'],
  plugins: [
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
