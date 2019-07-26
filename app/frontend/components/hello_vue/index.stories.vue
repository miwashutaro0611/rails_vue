<template lang="pug">
  test
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import { storiesOf } from '@storybook/vue'

import Test from './index.vue'

@Component({
  components: {
    Test
  },
})
export default class testStory extends Vue{}

storiesOf('Welcome', module)
  .add('to Storybook', () => testStory)
</script>
