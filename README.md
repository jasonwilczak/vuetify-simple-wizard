# vuetify-simple-wizard
A simple wizard that uses Vue2+Vuetify to get you going quickly

## Getting Started

### Installing

Install with npm:
```bash
npm install --save vuetify-simple-wizard
```

import into project:
```js
import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import VuetifySimpleWizard from 'vuetify-simple-wizard';

Vue.use(Vuetify)
Vue.use(VuetifySimpleWizard);
```

**or**

import into component: 

```js
// within your component script tag
import { SimpleWizard } from 'vuetify-simple-wizard';

// in your components
components: {
  'vuetify-simple-wizard': SimpleWizard,
}
```

### API

[Wiki/API](https://github.com/jasonwilczak/vuetify-simple-wizard/wiki/API)

### Examples

[Wiki/Examples](https://github.com/jasonwilczak/vuetify-simple-wizard/wiki/Examples)

## Contributing
