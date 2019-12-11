const merge = require('webpack-merge')

module.exports = ({ config }) =>
  merge(config, {
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: [
            {
              loader: require.resolve('babel-loader'),
              options: {
                presets: [require.resolve('babel-preset-react-app')]
              }
            },
            require.resolve('react-docgen-typescript-loader')
          ]
        }
      ]
    },
    resolve: {
      extensions: ['.ts', '.tsx']
    }
  })
