export interface BlogCardData {
	id: string | number;
	title: string;
	/** Subheading of title */
	intro: string;
}

export interface BlogData extends BlogCardData {
	content: string;
}
