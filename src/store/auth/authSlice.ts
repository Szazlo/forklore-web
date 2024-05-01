import { createSlice } from '@reduxjs/toolkit';
import { User } from "firebase/auth";
import { RootState } from '../store';

export interface AuthStateSlice {
    user: User | null;
}

const initialState: AuthStateSlice = {
    user: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = null;
        },
    },
});

export const { login, logout } = authSlice.actions;

export const selectUser = (state: RootState) => state.auth.user;

export default authSlice.reducer;