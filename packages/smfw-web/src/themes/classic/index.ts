import _ from 'lodash';

import { createTheme } from '@material-ui/core';

const globals = {
    padding: '0.5rem',
    fontFamily: '"Helvetica Neue", Helvetica, Roboto, Arial, sans-serif'
};

const theme = _.merge(
    createTheme({
        typography: {
            button: {
                textTransform: 'none'
            }
        },
        palette: {
            primary: {
                main: 'rgb(33, 111, 193)'
            }
        }
    }),
    {
        header: {
            height: '3rem',
            backgroundColor: 'rgb(45, 74, 119)',
            color: '#fff'
        },
        logobar: {
            fontSize: '1.2rem',
            width: '12rem'
        },
        navbar: {
            backgroundColor: 'rgb(55, 91, 147)',
            color: '#fff'
        },
        navbarPopoverPaper: {
            width: '12rem'
        },
        navMenu: {},
        sidebar: {
            width: '12rem',
            backgroundColor: 'rgb(55, 91, 147)',
            color: '#fff'
        },
        extrabar: {
            backgroundColor: 'rgb(55, 91, 147)',
            color: '#fff'
        },
        extrabarMenu: {},
        extrabarPopoverPaper: {
            width: '12rem'
        },
        workspace: {
            backgroundColor: '#fff',
            color: '#000'
        },
        footer: {
            backgroundColor: '#ececec',
            color: 'rgb(40, 40, 40)',
            fontSize: '0.8rem'
        },
        copyrightText: {
            fontSize: '0.8rem',
            color: 'rgb(68, 67, 67)'
        },
        globals
    }
);

export default theme;
