import React from 'react';
import _ from 'lodash';
import { useNavigate } from 'react-router-dom';
import { makeStyles, Drawer, List, ListItem, ListItemText, Collapse } from '@material-ui/core';

function TestDrawer(props: any) {
    const useStyles = makeStyles((theme: any) => ({
        paper: {
            width: '12rem'
        },
        nested: {
            paddingLeft: theme.spacing(4)
        }
    }));
    const classes = useStyles();

    const navigate = useNavigate();
    const engine = props.engine;
    const { pages } = engine;

    const categories: any = {};
    _.forEach(pages, (v: any, _i: number) => {
        const catName = v.title.split(' - ')[0];
        if (typeof categories[catName] === 'undefined') {
            categories[catName] = [];
        }
        categories[catName].push(v);
    });

    return (
        <Drawer
            classes={{ paper: classes.paper }}
            variant='permanent'
            anchor='left'
            open={true}
            PaperProps={{ style: { position: 'relative' } }}
            BackdropProps={{ style: { position: 'relative' } }}
            ModalProps={{
                container: document.getElementById('#app'),
                style: { position: 'relative' }
            }}
        >
            {_.keys(categories).map((catName: any, _i: number) => (
                <List key={catName} component='nav'>
                    <ListItem button>
                        <ListItemText primary={catName} />
                    </ListItem>
                    <Collapse in={true} timeout='auto' unmountOnExit>
                        <List component='div' disablePadding>
                            {categories[catName].map((page: any, _ii: number) => (
                                <ListItem
                                    button
                                    className={classes.nested}
                                    onClick={() => {
                                        navigate(page.path);
                                    }}
                                    key={page.title}
                                >
                                    <ListItemText primary={page.title} />
                                </ListItem>
                            ))}
                        </List>
                    </Collapse>
                </List>
            ))}
        </Drawer>
    );
}

export default TestDrawer;
