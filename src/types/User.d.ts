export interface ForkloreUserMeta {
	id: string;
	firstName: string;
	lastName?: string;
}

export interface ForkloreUser extends ForkloreUserMeta {
	email: string;
}
