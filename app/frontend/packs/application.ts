// Run this example by adding <%= javascript_pack_tag 'hello_typescript' %> to the head of your layout file,
// like app/views/layouts/application.html.erb.

import Vue from 'vue/dist/vue.esm'

import vueComp from '../components/hello_vue'

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#test',
    components: { 
      vueComp 
    },
  })
})
