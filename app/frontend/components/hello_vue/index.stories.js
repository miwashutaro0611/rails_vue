import { storiesOf } from '@storybook/vue';
import { linkTo } from '@storybook/addon-links';

import Welcome from './sample';

storiesOf('Welcome', module).add('to Storybook', () => ({
  components: { Welcome },
  template: '<welcome :showApp="action" />',
  methods: { action: linkTo('Button') },
}));