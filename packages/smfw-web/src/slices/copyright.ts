import { createSlice } from '@reduxjs/toolkit';

const fullYear = new Date().getFullYear();

export interface CounterState {
    text: string;
}

const initialState: CounterState = {
    text: `All Rights Reserved By RJFW @${fullYear}`
};

const slice = createSlice({
    name: 'copyright',
    initialState,
    reducers: {}
});

export default slice;
