import { configure } from '@storybook/vue';

// automatically import all files ending in *.stories.js
const req = require.context('../app/frontend/components/', true, /\.stories\.(vue|js)$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
