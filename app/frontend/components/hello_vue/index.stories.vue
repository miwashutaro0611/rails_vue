<template lang="pug">
  test(:message = "message")
</template>

<script>
import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import { linkTo } from '@storybook/addon-links'

import Test from './index'

const testStory = {
    components: {
      Test
    },
    data() {
      return{
        message: 'Hello Vue!'
      }
    }
}

export default testStory

storiesOf('Welcome', module)
  .add('to Storybook', () => testStory)
</script>
