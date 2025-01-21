import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { ForkloreUser } from "@/types/User";
import { Logger } from "@/lib/logger";

export interface AuthStateSlice {
	user: ForkloreUser | null;
}

const userFromStorage: ForkloreUser = JSON.parse(
	localStorage.getItem("auth_user") as string,
);

const initialState: AuthStateSlice = {
	user: userFromStorage || null,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		login: (state, action) => {
			state.user = action.payload;
			localStorage.setItem("auth_user", JSON.stringify(state.user));
			authLogger.log("Signed in as", state.user);
		},
		logout: (state) => {
			state.user = null;
			localStorage.removeItem("auth_user");
		},
	},
});

export const authLogger = new Logger("Auth");
export const { login, logout } = authSlice.actions;

export const selectUser = (state: RootState) => state.auth.user;

export default authSlice.reducer;
