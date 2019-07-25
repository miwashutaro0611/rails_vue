<template lang="pug">
  test( :message = "message" )
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import { storiesOf } from '@storybook/vue'
import { linkTo } from '@storybook/addon-links'

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
