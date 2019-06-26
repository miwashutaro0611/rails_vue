<template>
  <div>
    <p>{{ message }}</p>
  </div>
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

<style scoped>
p {
  font-size: 2em;
  text-align: center;
  color: #00f;
}
</style>
