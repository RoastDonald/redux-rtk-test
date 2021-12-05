import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux"
import { postAPI } from "../services/PostService";
import userReducer from './reducers/UserSlice';
const rootReducer = combineReducers({
    userReducer,
    [postAPI.reducerPath]: postAPI.reducer,
});

export const setupStore = ()=>{
    return configureStore({
        reducer:rootReducer,
        middleware: (getDefaultMidleware)=>
            getDefaultMidleware().concat(postAPI.middleware)
    });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch']; 