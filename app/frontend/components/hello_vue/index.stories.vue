<template>
  <div>
    <p>
      {{ message }}
    </p>
  </div>
</template>

<script>
import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import { linkTo } from '@storybook/addon-links'

// import Welcome from './index'

const testStory = {
    components: {
      Welcome
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
