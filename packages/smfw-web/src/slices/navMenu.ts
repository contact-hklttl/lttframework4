import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import _ from 'lodash';
import updateMenu from '../utils/updateMenu';

const defaultMenu = {
    label: '',
    open: false,
    id: 'root',
    icon: 'more_horiz',
    children: [
        {
            label: 'cc',
            open: false,
            id: 'popover-cc',
            children: [
                {
                    label: 'cc-1',
                    open: false,
                    id: 'popover-cc-1',
                    children: [
                        {
                            label: 'cc-1-1',
                            id: 'popover-cc-1-1',
                            onClick: (menu: any) => menu
                        }
                    ]
                }
            ]
        },
        {
            label: 'dd',
            id: 'popover-dd',
            onClick(menu: any) {
                return menu;
            }
        }
    ]
};

export interface CounterState {
    menu: any;
    mobileMenu: any;
}

const initialState: CounterState = {
    menu: defaultMenu,
    mobileMenu: _.cloneDeep(defaultMenu)
};

const slice = createSlice({
    name: 'navMenu',
    initialState,
    reducers: {
        updateMenu: (state, action: PayloadAction<any>) => {
            const { id, menu } = action.payload;
            updateMenu(state, 'menu', id, menu);
        },
        updateMobileMenu: (state, action: PayloadAction<any>) => {
            const { id, menu } = action.payload;
            updateMenu(state, 'mobileMenu', id, menu);
        }
    }
});

export default slice;
