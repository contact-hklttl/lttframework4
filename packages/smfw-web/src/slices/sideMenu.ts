import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import _ from 'lodash';
import updateMenu from '../utils/updateMenu';

const defaultMenu = {
    label: 'root',
    open: false,
    id: 'root',
    children: [
        {
            label: 'aa',
            open: false,
            id: 'popover-aa',
            children: [
                {
                    label: 'aa-1',
                    open: false,
                    id: 'popover-aa-1',
                    children: [
                        {
                            label: 'aa-1-1',
                            id: 'popover-aa-1-1',
                            onClick: (menu: any) => menu
                        }
                    ]
                }
            ]
        },
        {
            label: 'bb',
            id: 'popover-bb',
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
    name: 'sideMenu',
    initialState,
    reducers: {
        updateMenu: (state, action: PayloadAction<any>) => {
            const { id, menu } = action.payload;
            updateMenu(state, 'menu', id, menu);
        }
    }
});

export default slice;
