import type { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"

import { IDynamicUserData, IUserData } from "./types"

export interface AuthState {
	validationErrors?: {
		email?: string[]
		name?: string[]
		password?: string[]
	}
	userData: IDynamicUserData
}

const initialState: AuthState = {
	validationErrors: undefined,
	userData: {
		avatar: "",
		email: "",
		email_verified_at: "",
		id: "",
		name: "",
	},
}

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setValidationErrors: (state, action: PayloadAction<any>) => {
			state.validationErrors = action.payload
		},
		setUserData: (state, action: PayloadAction<IUserData>) => {
			state.user = action.payload
		},
	},
})

export const {
	setValidationErrors,
	setUserData,
} = authSlice.actions

export default authSlice.reducer
