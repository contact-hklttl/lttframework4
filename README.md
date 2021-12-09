# Installation
```sh
lerna bootstrap
lerna exec yarn
```

# Test
### @smfw/web
```sh
lerna --scope=@smfw/web run start
#or
cd packages/smfw-web && yarn start
```

### @smfw/cms
```sh
lerna --scope=@smfw/cms run start
#or
cd packages/smfw-cms && yarn start
```

# Example
```ts
import { Engine, templates, themes, slices, createStore, createReducer } from '@smfw/web';

const engine = new Engine();
const store = createStore(createReducer(slices), []);

engine.addTheme('themes.classic', themes.classic);
engine.addTemplate('templates.classic.manager', templates.classic.login);

engine.addPage({
    title: 'Login',
    path: '/'
  },
  'templates.classic.manager',
  'themes.classic'
);

engine.start({ store });
```
