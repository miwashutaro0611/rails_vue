<template lang="pug">
  div
    p 
      | {{ message }}
      span spanの内容でーす
</template>

<script>
export default {
  name: 'hello-temp',
  data () {
    return {
      message: "Hello Vue!"
    }
  },
}
</script>

<style lang="scss" scoped>
p {
  font-size: 2em;
  text-align: center;
  color: #00f;
  span {
    font-size: 3rem;
  }
}
</style>
