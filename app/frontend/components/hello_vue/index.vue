<template lang="pug">
  div
    p 
      | {{ message }}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class HelloVue extends Vue {
  message : string = 'うううう'
}
</script>

<style lang="scss" scoped>
p {
  font-size: 2em;
  text-align: center;
  color: #0ff;
  span {
    font-size: 3rem;
  }
}
</style>