import { createAsyncThunk } from "@reduxjs/toolkit"

import {
	signIn,
} from "./api"
import {
	AuthThunks,
	ISignIn,
} from "./types"
import {
	setUserData,
	setValidationErrors,
} from "./authSlice"

export const signInThunk = createAsyncThunk(
	`auth/${AuthThunks.SIGN_IN}`,
	async (data: ISignIn, { dispatch }) => {
		dispatch(setValidationErrors(null))

		const response = await signIn(data)

		if (response.errors) {
			dispatch(setValidationErrors(response.errors))

			return null
		} else {
			const data = {
				email: response.data.email,
				name: response.data.name,
				id: response.data.id,
				isLoggedIn: false,
			}

			dispatch(setUserData(data))
		}

		return response.data
	},
)
