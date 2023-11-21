export enum AuthThunks {
	SIGN_IN = "SIGN_IN",
}

export interface ISignIn {
	name: string
	email: string
	password: string
	password_confirmation: string
	subscribe: number
}

export interface IUserData {
	email?: string
	name?: string
	id?: string
	isLoggedIn: boolean
}

export interface IUser {
	email?: string
	name?: string
	id?: string
	isLoggedIn: boolean
}

export interface IDynamicUserData {
	avatar: string
	email: string
	email_verified_at: string
	id: string
	name: string
	object: string
	status: string
	phone?: string
	address?: string
	zipCode?: string
	country?: string
	city?: string
	tva?: string
}

