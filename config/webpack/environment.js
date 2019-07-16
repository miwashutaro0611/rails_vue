const { environment } = require('@rails/webpacker')
const typescript =  require('./loaders/typescript')
const { VueLoaderPlugin } = require('vue-loader')
const vue =  require('./loaders/vue')
const pug = require('./loaders/pug')
const cssLoader = environment.loaders.get('css')

environment.loaders.append('typescript', typescript)
environment.plugins.prepend('VueLoaderPlugin', new VueLoaderPlugin())
environment.loaders.prepend('vue', vue)
environment.loaders.prepend('pug', pug)
cssLoader.use=[
  {'loader':'vue-style-loader'}, 
  {'loader': 'css-loader'},
  {'loader': 'sass-loader'}
];
module.exports = environment
