import { createSlice } from '@reduxjs/toolkit';

export interface CounterState {
    show: boolean;
}

const initialState: CounterState = {
    show: true
};

const slice = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {
        toggle: (state) => {
            state.show = !state.show;
        }
    }
});

export default slice;
