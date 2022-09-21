import { ActionReducerMapBuilder, createReducer, PayloadAction } from '@reduxjs/toolkit';
import { setMedia } from '../actions/current_media.action';

const initialState = {
    media: {}
}

const initialOpenMediaState = {
    open: false
}

interface actionType {
    payload: {};
    type: string
}

const mediaReducer = createReducer(initialState, (builder: ActionReducerMapBuilder<typeof initialState>) => {
    builder.addCase(setMedia, (state, action) => {
        state.media = action.payload ? action.payload : initialState.media;
    })
});


export { mediaReducer as default };