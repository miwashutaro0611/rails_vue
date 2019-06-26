const { environment } = require('@rails/webpacker')
const vue =  require('./loaders/vue')
const pug = require('./loaders/pug')

environment.loaders.append('vue', vue)
environment.loaders.prepend('pug', pug)
module.exports = environment
