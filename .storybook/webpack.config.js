const path = require('path')
const rootPath = path.resolve(__dirname, '../')

module.exports = ({ config }) => {
  config.resolve.alias['vue'] = 'vue/dist/vue.esm.js'
  config.module.rules.push(
    {
      test: /\.ts$/,
      use: [
        {
          loader: 'ts-loader',
          options: {
            appendTsSuffixTo: [/\.vue$/],
            transpileOnly: true
          }
        },
      ]
    },
    {
      test: /\.scss$/,
      loaders: ['style-loader', 'css-loader', 'sass-loader']
    },
    {
      test: /\.pug$/,
      loaders: 'pug-plain-loader',
    }
  )
  return config
}