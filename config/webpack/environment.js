const { environment } = require('@rails/webpacker')
const typescript =  require('./loaders/typescript')
const vue =  require('./loaders/vue')
const pug = require('./loaders/pug')

environment.loaders.append('typescript', typescript)
environment.loaders.append('vue', vue)
environment.loaders.prepend('pug', pug)
module.exports = environment
