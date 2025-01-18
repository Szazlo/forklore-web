import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { ForkloreUser } from '@/types/User';
import { Logger } from '@/lib/logger';

export interface AuthStateSlice {
    user: ForkloreUser | null;
    token: string;
}

const initialState: AuthStateSlice = {
    user: null,
    token: "",
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
            authLogger.log("Signed in as", state.user, );
        },
        logout: (state) => {
            state.user = null;
        },
    },
});

export const authLogger = new Logger("Auth");
export const { login, logout } = authSlice.actions;

export const selectUser = (state: RootState) => state.auth.user;

export default authSlice.reducer;