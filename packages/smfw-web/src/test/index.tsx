import React from 'react';
import _ from 'lodash';
import logger from 'redux-logger';

import * as templates from '../templates';
import * as layouts from '../layouts';
import * as views from '../views';
import * as themes from '../themes';

import * as slices from '../slices';
import createStore from '../store';
import createReducer from '../reducer';

import TestDrawer from './TestDrawer';
import Engine from '../engine';

const engine = new Engine();
const store = createStore(createReducer(slices), [logger]);

_.forEach(themes, (v: any, i: string) => {
    engine.addTheme(`themes.${i}`, v);
});

_.forEach(views.classic, (v: any, i: string) => {
    engine.addView(`views.classic.${i}`, v);
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
        path: '/template/notFound',
        templateName: 'templates.classic.notFound',
        themeName: 'themes.classic',
        title: 'template - Not Found'
    },
    {
        path: '/template/login',
        templateName: 'templates.classic.login',
        themeName: 'themes.classic',
        title: 'template - Login'
    },
    {
        path: '/template/Home',
        templateName: 'templates.classic.manager',
        themeName: 'themes.classic',
        title: 'template - Home'
    },
    {
        path: '/layout/basic',
        templateName: 'layouts.classic.basic',
        themeName: 'themes.classic',
        title: 'layout - Basic'
    },
    {
        path: '/layout/common',
        templateName: 'layouts.classic.common',
        themeName: 'themes.classic',
        title: 'layout - Common'
    },
    {
        path: '/',
        templateName: 'templates.classic.manager',
        themeName: 'themes.classic',
        title: 'Home page'
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

engine.addDrawer((props: any) => <TestDrawer {...props} engine={engine} />);
engine.start({ store });
