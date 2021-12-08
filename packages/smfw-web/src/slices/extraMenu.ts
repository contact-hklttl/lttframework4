import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import _ from 'lodash';
import updateMenu from '../utils/updateMenu';

const defaultMenu = {
    label: '',
    open: false,
    id: 'root',
    icon: 'settings',
    expendIcon: false,
    children: [
        {
            label: 'ee',
            open: false,
            id: 'popover-ee',
            children: [
                {
                    label: 'ee-1',
                    open: false,
                    id: 'popover-ee-1',
                    children: [
                        {
                            label: 'ee-1-1',
                            id: 'popover-ee-1-1',
                            onClick: (menu: any) => menu
                        }
                    ]
                }
            ]
        },
        {
            label: 'ff',
            id: 'popover-ff',
            onClick(menu: any) {
                return menu;
            }
        }
    ]
};

export interface CounterState {
    menu: any;
}

const initialState: CounterState = {
    menu: defaultMenu
};

const slice = createSlice({
    name: 'extraMenu',
    initialState,
    reducers: {
        updateMenu: (state, action: PayloadAction<any>) => {
            const { id, menu } = action.payload;
            updateMenu(state, 'menu', id, menu);
        }
    }
});

export default slice;
