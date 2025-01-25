import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function timeAgo(date: Date) {
	const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);

	const interval = Math.floor(seconds / 31536000);

	if (interval > 1) {
		return interval + " years ago";
	}
	if (interval === 1) {
		return interval + " year ago";
	}

	const months = Math.floor(seconds / 2628000);
	if (months > 1) {
		return months + " months ago";
	}
	if (months === 1) {
		return months + " month ago";
	}

	const days = Math.floor(seconds / 86400);
	if (days > 1) {
		return days + " days ago";
	}
	if (days === 1) {
		return days + " day ago";
	}

	const hours = Math.floor(seconds / 3600);
	if (hours > 1) {
		return hours + " hours ago";
	}
	if (hours === 1) {
		return hours + " hour ago";
	}

	const minutes = Math.floor(seconds / 60);
	if (minutes > 1) {
		return minutes + " minutes ago";
	}
	if (minutes === 1) {
		return minutes + " minute ago";
	}

	return "just now";
}

export function formatDate(timestamp: Date) {
	return timestamp.toLocaleDateString("en-US", {
		year: "numeric",
		month: "short",
		day: "numeric",
	});
}

/**
 * Validates an email
 * @param email the email to validate
 * @returns whether the email is valid
 */
export function validateEmail(email: string) {
	const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return re.test(email);
}

export type PasswordResponse = {
	valid: boolean;
	messages: string[];
};

/**
 * Validates a password based on the following criteria:
 * - At least 6 characters long
 * - No more than 20 characters long
 * - Contains at least one numeric digit
 * - Contains at least one uppercase letter
 * @param password The password to validate
 * @returns An object containing the validity of the password and any error messages
 */
export function validatePassword(password: string) {
	const messages: string[] = [];

	if (password.length < 8) {
		messages.push("Password must be at least 8 characters long.");
	}
	if (password.length > 20) {
		messages.push("Password must be no more than 20 characters long.");
	}
	if (!/(?=.*\d)/.test(password)) {
		messages.push("Password must contain at least one numeric digit.");
	}
	if (!/(?=.*[A-Z])/.test(password)) {
		messages.push("Password must contain at least one uppercase letter.");
	}

	return {
		valid: messages.length === 0,
		messages,
	};
}
