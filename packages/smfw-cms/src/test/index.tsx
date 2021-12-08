import _ from 'lodash';

import { Engine, templates, layouts, themes, slices, createStore, createReducer } from '@smfw/web';
import logger from 'redux-logger';

const engine = new Engine();
const store = createStore(createReducer(slices), [logger]);

_.forEach(themes, (v: any, i: string) => {
    engine.addTheme(`themes.${i}`, v);
});

_.forEach(layouts.classic, (v: any, i: string) => {
    engine.addLayout(`layouts.classic.${i}`, v);
});

_.forEach(templates.classic, (v: any, i: string) => {
    engine.addTemplate(`templates.classic.${i}`, v);
});

_.forEach(layouts.classic, (v: any, i: string) => {
    engine.addTemplate(`layouts.classic.${i}`, v);
});

const pages = [
    {
        path: '/',
        templateName: 'templates.classic.manager',
        themeName: 'themes.classic',
        title: 'Home'
    }
];
_.forEach(pages, (v: any, _i: number) => {
    engine.addPage(
        {
            title: v.title,
            path: v.path
        },
        v.templateName,
        v.themeName
    );
});

engine.start({ store });
