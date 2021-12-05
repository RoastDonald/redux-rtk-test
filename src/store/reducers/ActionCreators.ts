import axios, { AxiosError } from "axios";
import { AppDispatch } from "../store";
import { IUser } from '../../models/IUser';
import { userSlice } from "./UserSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";
// export const fetchUsers = ()=> async (dispatch: AppDispatch)=>{
//     try {
//         dispatch(userSlice.actions.usersFetching());
//         const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
//         dispatch(userSlice.actions.usersFetchingSuccess(response.data));
//     } catch(error: unknown){
//         if(error instanceof Error){
//             dispatch(userSlice.actions.usersFetchingFailure(error.message));
//         }
//     }
// }


export const fetchUsers = createAsyncThunk(
    'users/fetchAll',
    async (_,thunkAPI)=>{
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
            return response.data;
        } catch(e){
            return thunkAPI.rejectWithValue('Fetching error')
        }
    }
)