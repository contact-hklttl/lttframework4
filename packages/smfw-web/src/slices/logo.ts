import { createSlice } from '@reduxjs/toolkit';

export interface CounterState {
    text: string;
}

const initialState: CounterState = {
    text: 'SMCMS'
};

const slice = createSlice({
    name: 'logo',
    initialState,
    reducers: {}
});

export default slice;
