export interface ForkloreUserMeta {
	id: string;
	firstName: string;
	lastName?: string;
	photoUrl?: string;
	username?: string;
}

export interface ForkloreUser extends ForkloreUserMeta {
	type?: string;
	gender?: number;
	country?: string;
	email: string;
}
