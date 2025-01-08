import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/store/store.ts";

export interface SignUpStateSlice {
	uid: "";
	firstName: string;
	lastName?: string;
	email: string;
}

const initialState: SignUpStateSlice = {
	uid: "",
	firstName: "",
	lastName: "",
	email: "",
};

const signupSlice = createSlice({
	name: "signup",
	initialState,
	reducers: {
		/**
		 * Store temporary information about user to continue sign up process
		 * @param state
		 * @param action
		 */
		addNameAndEmail: (state, action) => {
			state.uid = action.payload.uid;
			state.firstName = action.payload.firstName;
			state.lastName = action.payload.lastName;
		},
	},
});

export const { addNameAndEmail } = signupSlice.actions;

export const selectSignupMeta = (state: RootState) => state.signup;

export default signupSlice.reducer;
