import { combineReducers, configureStore } from '@reduxjs/toolkit';
import mediaReducer from './reducers/current_media.reducer';



const store = configureStore({
    reducer: combineReducers({
        mediaStore: mediaReducer,
    })
});

export default store;